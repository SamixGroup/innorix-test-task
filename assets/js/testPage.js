document.body.onload = async () => {
  document.getElementById('addButton').addEventListener('click', async () => {
    console.log('add button clicked')

    await fetch('/addTestData', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        factory_name: 'Fake Factory Name',
        contact_name: 'Fake Contact Name',
        factory_email: 'fakeemail@example.com',
        factory_manager: 'Fake Manager',
        factory_status: 'active'
      })
    })
    await getTestData()
  })
  document.getElementById('updateButton').addEventListener('click', async () => {
    console.log('update button clicked')

    await fetch('/updateTestData', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: ''
    })
    await getTestData()
  })

  document.getElementById('deleteButton').addEventListener('click', async () => {
    console.log('delete button clicked')

    await fetch('/deleteTestData', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: ''
    })
    await getTestData()
  })
  await getTestData()
}


async function getTestData() {
  console.log('getTestData')

  let response = await fetch('/getTestData')
  let data = await response.json()

  let table = document.getElementById('tbody')
  table.innerHTML = ''
  data.forEach(factory => {
    let row = table.insertRow(-1)
    row.insertCell(0).innerHTML = factory.id
    row.insertCell(1).innerHTML = factory.factory_name
    row.insertCell(2).innerHTML = factory.contact_name
    row.insertCell(3).innerHTML = factory.factory_email
    row.insertCell(4).innerHTML = factory.factory_manager
    row.insertCell(5).innerHTML = factory.factory_status
  })
}


