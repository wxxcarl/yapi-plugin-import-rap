const controller = require('./controller');

module.exports = function () {
  this.bindHook('add_router', function(addRouter) {
    addRouter({
      controller: controller,
      method: 'get',
      path: 'rap/get',
      action: 'rapJson'
    });
  })
}