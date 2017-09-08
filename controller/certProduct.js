const Result = require('../common/result')

exports.queryAllCertProductList = (req, res, next) => {
  let list = [
    {
      id: 1,
      productType: 'CD',
      productName: '车贷',
      title: '测试标题',
      code: 'CD',
      createTime: '2017-09-01 00:00:00',
      updateTime: '2017-09-01 00:00:00',
      status: 'enabled',
      statusDesc: '已启用',
      introducton: '简介简介+++++++++',
      description: '测试描述',
      iconUrl: 'http://img.007fenqi.com.cn/hestia/46280cb275320b2576efcd58f444c632.png',
      tags: '成人贷, 现金贷',
      operator: 1,
      operatorName: '管理员',
      creator: 1,
      creatorName: '管理员',
      productConfigTemplateId: 1,
      productConfigTemplateName: '车贷'
    },
    {
      id: 2,
      productType: 'FD',
      productName: '房贷',
      title: '测试标题',
      code: 'FD',
      createTime: '2017-09-01 00:00:00',
      updateTime: '2017-09-01 00:00:00',
      status: 'enabled',
      statusDesc: '已启用',
      introducton: '简介简介+++++++++',
      description: '测试描述',
      iconUrl: 'http://img.007fenqi.com.cn/hestia/46280cb275320b2576efcd58f444c632.png',
      tags: '成人贷, 现金贷',
      operator: 1,
      operatorName: '管理员',
      creator: 1,
      creatorName: '管理员',
      productConfigTemplateId: 1,
      productConfigTemplateName: '房贷'
    }
  ]
  res.send(Result.success(list))
  next()
}

exports.queryAllProCfgTplList = (req, res, next) => {
  let list = [
    {
      id: 1,
      templateName: '配置模板1',
      attribute: '',
      attributeVersion: 1,
      createTime: '2017-09-01 00:00:00',
      updateTime: '2017-09-01 00:00:00',
      status: 'enabled',
      statusDesc: '已启用',
      creator: 1,
      creatorName: '管理员',
      operator: 1,
      operatorName: '管理员'
    },
    {
      id: 2,
      templateName: '配置模板2',
      attribute: '',
      attributeVersion: 1,
      createTime: '2017-09-01 00:00:00',
      updateTime: '2017-09-01 00:00:00',
      status: 'enabled',
      statusDesc: '已启用',
      creator: 1,
      creatorName: '管理员',
      operator: 1,
      operatorName: '管理员'
    }
  ]
  res.send(Result.success(list))
  next()
}