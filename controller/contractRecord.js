const Result = require('../common/result')

exports.queryContractRecordList = (req, res, next) => {
  let list = [
    {
      id: 1,
      type: 'fdd_auto',
      typeDesc: '法大大自动',
      contractId: 1403,
      userId: 1,
      user: {
        name: '张三',
        phone: '13500000000'
      },
      detailInfo: '{"batchId":"51","clientRole":"4","clientType":"1","contractId":"201602201613480000000003OB40","customerId":"4687794F71458DCE","docTitle":"借款协议","docUrl":"","msgDigest":"MzFGNkM1OUNEMjMzNEFFRDM4Q0NFNEEyRjI0MzRBRDhFQzZGNDlBMw==","responseType":"com.llq.thirdpartner.fadada.api.report.resp.ExSignAutoResponse","signKeyword":"张云云","timestamp":"20160220161349","transactionId":"201602201613480000000003OB40","version":"2.0"}',
      dealTime: '2016-02-23 12:16:49',
      status: 'normal',
      statusDesc: '正常',
      refType: 'apply_no',
      refNo: '201602171152520000000007OB57',
      downloadUrl: 'https://extapi.fadada.com/api2//getdocs.action?app_id=000109&v=2.0&timestamp=20160405172551&transaction_id=4051724510000000003OB78304874545&msg_digest=QzU2ODkyNUQ0QzlCOTg0QzVBREUwOEI2OTY2OUQwNDBFNDdCMzYwRA==',
      viewPdfUrl: 'https://extapi.fadada.com/api2//viewdocs.action?app_id=000109&v=2.0&timestamp=20160405172551&transaction_id=4051724510000000003OB78304874545&msg_digest=QzU2ODkyNUQ0QzlCOTg0QzVBREUwOEI2OTY2OUQwNDBFNDdCMzYwRA==',
      finalPdfUrl: 'contract/fdd/loan/201604051724510000000003OB78_final.pdf',
      archive: 1
    },
    {
      id: 2,
      type: 'fdd_auto',
      typeDesc: '法大大手动',
      contractId: 1404,
      userId: 2,
      user: {
        name: '李四',
        phone: '13500000001'
      },
      detailInfo: '{"batchId":"51","clientRole":"4","clientType":"1","contractId":"201602201613480000000003OB40","customerId":"4687794F71458DCE","docTitle":"借款协议","docUrl":"","msgDigest":"MzFGNkM1OUNEMjMzNEFFRDM4Q0NFNEEyRjI0MzRBRDhFQzZGNDlBMw==","responseType":"com.llq.thirdpartner.fadada.api.report.resp.ExSignAutoResponse","signKeyword":"张云云","timestamp":"20160220161349","transactionId":"201602201613480000000003OB40","version":"2.0"}',
      dealTime: '2016-02-23 12:16:49',
      status: 'normal',
      statusDesc: '正常',
      refType: 'apply_no',
      refNo: '201602171152520000000007OB57',
      downloadUrl: 'https://extapi.fadada.com/api2//getdocs.action?app_id=000109&v=2.0&timestamp=20160405172551&transaction_id=4051724510000000003OB78304874545&msg_digest=QzU2ODkyNUQ0QzlCOTg0QzVBREUwOEI2OTY2OUQwNDBFNDdCMzYwRA==',
      viewPdfUrl: 'https://extapi.fadada.com/api2//viewdocs.action?app_id=000109&v=2.0&timestamp=20160405172551&transaction_id=4051724510000000003OB78304874545&msg_digest=QzU2ODkyNUQ0QzlCOTg0QzVBREUwOEI2OTY2OUQwNDBFNDdCMzYwRA==',
      finalPdfUrl: 'contract/fdd/loan/201604051724510000000003OB78_final.pdf',
      archive: 1
    }
  ]
  res.send(Result.success(list))
  next()
}

exports.countContractRecordList = (req, res, next) => {
  let count = 2
  res.send(Result.success(count))
  next()
}