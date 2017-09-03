const restify = require('restify');
const plugins = require('restify-plugins');
const logger = require('log4js').getLogger()
logger.level = 'debug'

const router = require('./router');
const config = require('./config');

const server = restify.createServer({
  name: 'mock server',
  version: '1.0.0'
});

server.use(plugins.acceptParser(server.acceptable));
server.use(plugins.queryParser());
server.use(plugins.bodyParser());

server.pre((req, res, next) => {
  // logger.info("Headers = %s", req);
  next()
})

server.listen(config.port, function () {
  logger.info('%s listening at %s', server.name, server.url);

  router.registerApi(server);
});



server.on('close', function(errno) {
  logger.info('%s server close.', server.name)
});