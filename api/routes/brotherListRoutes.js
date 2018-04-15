'use strict';
module.exports = function(app) {
  var brotherList = require('../controllers/brotherListController');

  // todoList Routes
  app.route('/brothers')
    .get(brotherList.list_all_brothers)
    .post(brotherList.create_a_brother);

  app.route('/brothers/:rollNumber')
    .get(brotherList.read_a_brother)
    .put(brotherList.update_a_brother)
    .delete(brotherList.delete_a_brother);

  app.route('/active')
  	.get(brotherList.list_active_brothers);
};