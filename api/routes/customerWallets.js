module.exports = app => {
  const controller = require('../controller/customerWallets.js')();

  app.route('/api/v1/customer-wallets')
    .get(controller.listCustomerWallets);
}
