const { default: AdminBro } = require('admin-bro');
const AdminBroMongoose = require('admin-bro-mongoose');

AdminBro.registerAdapter(AdminBroMongoose);

const AdminUser = require('./users/users.admin');
const AdminHappening = require('./happenings/happenings.admin');

/** @type {import('admin-bro').AdminBroOptions} */
const options = {
  resources: [AdminUser,AdminHappening],
};

module.exports = options;
