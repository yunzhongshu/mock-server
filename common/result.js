const logger = require('log4js').getLogger()
const SuccessResult = {
  code: 200,
  msg: "成功",
  _csrf: null,
  data: null,
  fieldErrMsg: null,
  login: false
}

exports.success = (data) => {
  let result = SuccessResult
  if (data instanceof Array) {
    result.data = {
      items: data
    }
  } else {
    result.data = data
  }
  logger.info('result=%s', JSON.stringify(result))
  return result
}