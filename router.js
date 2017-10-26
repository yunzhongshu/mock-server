const loginController = require('./controller/login')
const cashApplyController = require('./controller/cashApply');
const repaymentScheduleController = require('./controller/repaymentSchedule')
const repaymentBillController = require('./controller/repaymentBill')
const userController = require('./controller/user')
const commonController = require('./controller/common')
const CertProductController = require('./controller/certProduct')
const ContractRecordController = require('./controller/contractRecord')
const CollectionCaseController = require('./controller/collectionCase')
const CollectionEmpController = require('./controller/collectionEmp')
const PostponementController = require('./controller/postponement')
const PaymentController = require('./controller/payment')

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

  server.post('/contract/list_contract_records.json', ContractRecordController.queryContractRecordList)

  server.post('/contract/count_contract_records.json', ContractRecordController.countContractRecordList)

  server.post('/collection/case/count_cases.json', CollectionCaseController.countCollectionCases)

  server.post('/collection/case/list_cases.json', CollectionCaseController.queryCollectionCases)

  server.post('/collection/case/count_tracks.json', CollectionCaseController.countCollectionCaseTracks)

  server.post('/collection/case/list_tracks.json', CollectionCaseController.queryCollectionCaseTracks)

  server.post('/collection/list_groups.json', CollectionEmpController.queryCollectionGroups)

  server.post('/collection/count_groups.json', CollectionEmpController.countCollectionGroups)

  server.post('/collection/list_employees.json', CollectionEmpController.queryCollectionEmployees)

  server.post('/collection/count_employees.json', CollectionEmpController.countCollectionEmployees)

  server.post('/postpone/apply/list.json', PostponementController.queryPostponementApplyList)

  server.post('/postpone/apply/count.json', PostponementController.countPostponementApplyList)

  server.post('/payment/list_payments.json', PaymentController.listPayments)

  server.post('/payment/count_payments.json', PaymentController.countPayments)
};
