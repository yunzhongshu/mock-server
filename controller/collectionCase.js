const Result = require('../common/result')

exports.queryCollectionCases = (req, res, next) => {
  let list = [
    {
      id: 1,
      caseNo: '2017091000120170910001',
      billNo: '2017091000120170910001',
      bill: {
        id: 1,
        title: '测试账单1',
        type: '',
        typeDesc: '账单类型',
        billNo: '账单号',
        userId: 1,
        amount: 1000,
        interestAmount: 100,
        preCutInterestAmount: 50,
        dueTime: '2017-10-01 00:00:00',
        startTime: '2017-09-01 00:00:00',
        status: 'overdue',
        statusDesc: '逾期',
        penalSumAmount: '300',
        overdueDay: 4,
        createTime: '2017-09-01 00:00:00',
        updateTime: '2017-09-01 00:00:00',
        periodIndex: 1
      },
      userId: 1,
      user: {
        name: '张三',
        phone: '13500000001'
      },
      level: 'normal',
      levelDesc: '正常',
      status: 'wait_assign',
      statusDesc: '等待分配',
      createTime: '2017-09-10 00:00:00',
      updateTime: '2017-09-10 00:00:00',
      assignTo: null,
      assignToEmp: null,
      assignToGroup: null,
      assignToType: null,
      assignToTypeDesc: '',
      assigner: null,
      assignerUser: null,
      startTime: null,
      finishTime: null,
      memo: null,
      tags: '',
      source: 'self',
      sourceDesc: '自己',
      batchNo: 'xxx'
    },
    {
      id: 2,
      caseNo: '2017091000120170910001',
      billNo: '2017091000120170910001',
      bill: {
        id: 1,
        title: '测试账单1',
        type: '',
        typeDesc: '账单类型',
        billNo: '账单号',
        userId: 1,
        amount: 1000,
        interestAmount: 100,
        preCutInterestAmount: 50,
        dueTime: '2017-10-01 00:00:00',
        startTime: '2017-09-01 00:00:00',
        status: 'overdue',
        statusDesc: '逾期',
        penalSumAmount: '300',
        overdueDay: 4,
        createTime: '2017-09-01 00:00:00',
        updateTime: '2017-09-01 00:00:00',
        periodIndex: 1
      },
      userId: 1,
      user: {
        name: '张三',
        phone: '13500000001'
      },
      level: 'normal',
      levelDesc: '正常',
      status: 'assigned',
      statusDesc: '已分配',
      createTime: '2017-09-10 00:00:00',
      updateTime: '2017-09-10 00:00:00',
      assignTo: null,
      assignToEmp: null,
      assignToGroup:{
        name: '催收分组'
      },
      assignToType: 'group',
      assignToTypeDesc: '催收组',
      assigner: null,
      assignerUser: null,
      startTime: null,
      finishTime: null,
      memo: null,
      tags: '',
      source: 'self',
      sourceDesc: '自己',
      batchNo: 'xxx'
    },
    {
      id: 3,
      caseNo: '2017091000120170910001',
      billNo: '2017091000120170910001',
      bill: {
        id: 1,
        title: '测试账单1',
        type: '',
        typeDesc: '账单类型',
        billNo: '账单号',
        userId: 1,
        amount: 1000,
        interestAmount: 100,
        preCutInterestAmount: 50,
        dueTime: '2017-10-01 00:00:00',
        startTime: '2017-09-01 00:00:00',
        status: 'overdue',
        statusDesc: '逾期',
        penalSumAmount: '300',
        overdueDay: 4,
        createTime: '2017-09-01 00:00:00',
        updateTime: '2017-09-01 00:00:00',
        periodIndex: 1
      },
      userId: 1,
      user: {
        name: '张三',
        phone: '13500000001'
      },
      level: 'normal',
      levelDesc: '正常',
      status: 'processing',
      statusDesc: '处理中',
      createTime: '2017-09-10 00:00:00',
      updateTime: '2017-09-10 00:00:00',
      assignTo: null,
      assignToEmp: {
        name: '催收人1'
      },
      assignToGroup: null,
      assignToType: 'employee',
      assignToTypeDesc: '催收员',
      assigner: null,
      assignerUser: null,
      startTime: null,
      finishTime: null,
      memo: null,
      tags: '',
      source: 'self',
      sourceDesc: '自己',
      batchNo: 'xxx'
    }
  ]
  res.send(Result.success(list))
  next()
}

exports.countCollectionCases = (req, res, next) => {
  res.send(Result.success(2))
  next()
}

exports.queryCollectionCaseTracks = (req, res, next) => {
  let list = [
    {
      id: 1,
      caseId: 2,
      operator: 1,
      operatorUser: {
        realName: '管理员1'
      },
      createTime: '2017-09-10 00:00:00',
      updateTime: '2017-09-10 00:00:00',
      opType: 'close',
      opTypeDesc: '关闭',
      memo: '案件有问题'
    },
    {
      id: 1,
      caseId: 2,
      operator: 1,
      operatorUser: {
        realName: '管理员1'
      },
      createTime: '2017-09-10 00:00:00',
      updateTime: '2017-09-10 00:00:00',
      opType: 'return',
      opTypeDesc: '退回',
      memo: '案件有问题'
    }
  ]
  res.send(Result.success(list))
  next()
}

exports.countCollectionCaseTracks = (req, res, next) => {
  res.send(Result.success(2))
  next()
}