const controller = require('./controller');

module.exports = function (options) {
  const { rapOrigin } = options;
  global.importRap = {
    origin: rapOrigin
  }
  this.bindHook('add_router', function(addRouter) {
    addRouter({
      controller: controller,
      method: 'get',
      path: 'rap/get',
      action: 'rapJson'
    });
  })
}