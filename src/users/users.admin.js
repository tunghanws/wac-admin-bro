const AdminBro = require('admin-bro');
const { Users } = require('./users.entity');

const {
  after: passwordAfterHook,
  before: passwordBeforeHook,
} = require('./actions/password.hook');

const {
  after: uploadAfterHook,
  before: uploadBeforeHook,
} = require('./actions/upload-image.hook');

/** @type {AdminBro.ResourceOptions} */
const options = {
  properties: {},
  actions: {
    new: {
      after: async (response, request, context) => {
        const modifiedResponse = await passwordAfterHook(response, request, context);
        return uploadAfterHook(modifiedResponse, request, context);
      },
      before: async (request, context) => {
        const modifiedRequest = await passwordBeforeHook(request, context);
        return uploadBeforeHook(modifiedRequest, context);
      },
    },
    edit: {
      after: async (response, request, context) => {
        const modifiedResponse = await passwordAfterHook(response, request, context);
        return uploadAfterHook(modifiedResponse, request, context);
      },
      before: async (request, context) => {
        const modifiedRequest = await passwordBeforeHook(request, context);
        return uploadBeforeHook(modifiedRequest, context);
      },
    },
    show: {
      isVisible: true,
    },
  },
};

module.exports = {
  options,
  resource: Users,
};
