const loginController = require('./controller/login')
const cashApplyController = require('./controller/cashApply');
const repaymentScheduleController = require('./controller/repaymentSchedule')
const repaymentBillController = require('./controller/repaymentBill')
const userController = require('./controller/user')
const commonController = require('./controller/common')
const CertProductController = require('./controller/certProduct')

exports.registerApi = function (server) {

  server.post('/login.do', loginController.login)

  server.get('/admin/auth/query_user_info.json', loginController.queryUser)

  server.get('/common/query_constant_data.json', commonController.queryConstantData)

  server.post('/cashapply/list.json', cashApplyController.queryList);

  server.post('/cashapply/count.json', cashApplyController.queryCount);

  server.post('/repayment/schedule/list.json', repaymentScheduleController.queryRepaymentSchedule);

  server.post('/repayment/schedule/count.json', repaymentScheduleController.countRepaymentSchedules);

  server.post('/repayment/bill/list.json', repaymentBillController.queryBillList);

  server.post('/repayment/bill/count.json', repaymentBillController.countBillList)

  server.post('/user/list.json', userController.queryUserList)

  server.post('/user/count.json', userController.countUserList)

  server.post('/cert/list_cert_products.json', CertProductController.queryAllCertProductList)

  server.post('/cert/config/list_product_config_templates.json', CertProductController.queryAllProCfgTplList)
};
