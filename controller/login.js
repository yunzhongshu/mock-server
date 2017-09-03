const logger = require('log4js').getLogger()
const Result = require('../common/result')

exports.login = (req, res, next) => {

  res.redirect({
    hostname: 'manage-dev.cash.com',
    pathname: '/loginSuccess',
    port: 80                 // defaults to 80
  }, next);
}

exports.queryUser = (req, res, next) => {
  res.send(Result.success({
    id: 1,
    name: 'admin',
    pageList: []
  }))
  next()
}
