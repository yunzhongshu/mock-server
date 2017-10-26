const Result = require('../common/result')

exports.countUserList = (req, res, next) => {
  let count = 2
  res.send(Result.success(count))
  next()
}

exports.queryUserList = (req, res, next) => {
  let list = [
    {
      id: 1,
      name: '张三',
      sex: 1,
      sexDesc: '男',
      idNo: '330501199012121310',
      phone: '13500000000',
      source: 'wechat',
      status: 'normal',
      statusDesc: '正常',
      createTime: '2017-09-01 00:00:00',
      updateTime: '2017-09-01 00:00:00',
      thirdId:  123456,
      certCensorList: [
        {
          certProductName: '车贷',
          status: 'wait_audit',
          statusDesc: '待审核'
        },
        {
          certProductName: '成人贷',
          status: 'rejected',
          statusDesc: '拒绝'
        }
      ],
      userRiskInfo: {
        labelName: '南条'
      },
      userAccount: {
        totalCreditAmount: 1000,
        balanceCreditAmount: 500
      },
      contractUserInfo: {
        id: 1,
        userId: 3,
        detailInfo: '{"appId":"000109","appSecret":"917ib3CWnoYlMHB44UpazJkR","customerName":"张云云","email":"zhangyunyun@007fenqi.com","idMobile":"BB53C6AC616C0FD75987B95B12F45EBA0090B689F9A3059C2598F8C0D04AC7FB","idNo":"330501198212021310","mobile":"13606714461","msgDigest":"N0VGMDMwMjEwOTQ3RTMxRTcyMzA1NUYxODM5QkE1Rjg4MjZENEEyRQ==","responseType":"com.llq.thirdpartner.fadada.api.report.resp.PersonCaResponse","serverUrl":"https://extapi.fadada.com/api2/","timestamp":"20170310175927","version":"2.0"}',
        contentType: 'fdd_cus_id',
        contentTypeDesc: '法大大用户编号',
        dealTime: '2017-09-01 00:00:00'
      }
    },
    {
      id: 2,
      name: '李四',
      sex: 1,
      sexDesc: '男',
      idNo: '330501199012121311',
      phone: '13500000001',
      source: 'wechat',
      status: 'normal',
      statusDesc: '正常',
      createTime: '2017-09-01 00:00:00',
      updateTime: '2017-09-01 00:00:00',
      thirdId:  123456,
      certCensorList: [
        {
          certProductName: '车贷',
          status: 'passed',
          statusDesc: '通过'
        }
      ],
      userRiskInfo: {
        labelName: '南条'
      },
      userAccount: {
        totalCreditAmount: 1000,
        balanceCreditAmount: 500
      },
      contractUserInfo: null
    }
  ]
  res.send(Result.success(list))
  next()
}