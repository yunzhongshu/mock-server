const loginController = require('./controller/login')
const cashApplyController = require('./controller/cashApply');
const repaymentScheduleController = require('./controller/repaymentSchedule')
const commonController = require('./controller/common')

exports.registerApi = function (server) {

  server.post('/login.do', loginController.login)

  server.get('/admin/auth/query_user_info.json', loginController.queryUser)

  server.get('/common/query_constant_data.json', commonController.queryConstantData)

  server.post('/cashapply/list.json', cashApplyController.queryList);

  server.post('/cashapply/count.json', cashApplyController.queryCount);

  server.post('/repaymentschedule/list.json', repaymentScheduleController.queryRepaymentSchdule);

  server.post('/repaymentschedule/count.json', repaymentScheduleController.countRepaymentSchdules);
};
