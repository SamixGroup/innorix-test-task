/**
 * TestController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const TestModel = require('../models/TestModel')

module.exports = {
  testPage: function (req, res) {
    return res.view('pages/testPage')
  },
  getTestData: async function (req, res) {
    res.json(await TestModel.find())
  },
  addTestData: async function (req, res) {
    let newFactory = {
      factory_name: req.body.factory_name,
      contact_name: req.body.contact_name,
      factory_email: req.body.factory_email,
      factory_manager: req.body.factory_manager,
      factory_status: req.body.factory_status
    }
    TestModel.push(newFactory)
    res.json(newFactory)
  },
  updateTestData: async function (req, res) {
    const items = await TestModel.find()
    await TestModel.update(items[items.length-1].id, { factory_status: 'inactive' })
    res.json(true)
  },
  destroyTestData: async function (req, res) {
    const items = await TestModel.find()
    await TestModel.destroy(items[items.length-1].id)
    res.json(true)
  }
}

