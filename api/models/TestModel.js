let factories = [
  { id: 1, factory_name: 'Factory 1', contact_name: 'John Doe', factory_email: 'asa@asa.com', factory_manager: 'John Doe', factory_status: 'active'},
  { id: 2, factory_name: 'Factory 2', contact_name: 'Jane Smith', factory_email: 'jane@smith.com', factory_manager: 'Jane Smith', factory_status: 'inactive' },
  { id: 3, factory_name: 'Factory 3', contact_name: 'Alice Johnson', factory_email: 'alice@johnson.com', factory_manager: 'Alice Johnson', factory_status: 'active' },
  { id: 4, factory_name: 'Factory 4', contact_name: 'Bob Brown', factory_email: 'bob@brown.com', factory_manager: 'Bob Brown', factory_status: 'inactive' },
  { id: 5, factory_name: 'Factory 5', contact_name: 'Charlie Davis', factory_email: 'charlie@davis.com', factory_manager: 'Charlie Davis', factory_status: 'active' },
  { id: 6, factory_name: 'Factory 6', contact_name: 'Diana Evans', factory_email: 'diana@evans.com', factory_manager: 'Diana Evans', factory_status: 'inactive' },
  { id: 7, factory_name: 'Factory 7', contact_name: 'Evan Harris', factory_email: 'evan@harris.com', factory_manager: 'Evan Harris', factory_status: 'active' }
]

module.exports = {
  find: async function () {
    return factories
  },
  push: async function (newFactory) {
    factories.push({...newFactory, id: factories.length + 1})
  },
  update: async function (id, newFactory) {
    let index = factories.findIndex(factory => factory.id === id)
    factories[index] =  {...factories[index],...newFactory}
    return index
  },
  destroy: async function (id) {
    factories = factories.filter(factory => factory.id !== id)
  }
}
