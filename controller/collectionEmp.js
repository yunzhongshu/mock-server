const Result = require('../common/result')

exports.queryCollectionGroups = (req, res, next) => {
  let list = [
    {
      id: 1,
      name: '催收1组'
    },
    {
      id: 2,
      name: '催收2组'
    }
  ]
  res.send(Result.success(list))
  next()
}

exports.countCollectionGroups = (req, res, next) => {
  res.send(Result.success(2))
  next()
}


exports.queryCollectionEmployees = (req, res, next) => {
  let list = [
    {
      id: 1,
      name: '催收1号'
    },
    {
      id: 2,
      name: '催收2号'
    },
    {
      id: 3,
      name: '催收3号'
    },
    {
      id: 4,
      name: '催收4号'
    },
    {
      id: 5,
      name: '催收5号'
    },
    {
      id: 6,
      name: '催收6号'
    },
    {
      id: 7,
      name: '催收7号'
    },
    {
      id: 8,
      name: '催收8号'
    }
  ]
  res.send(Result.success(list))
  next()
}

exports.countCollectionEmployees = (req, res, next) => {
  res.send(Result.success(2))
  next()
}
