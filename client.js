import ImportRapPage from './importRapPage/index';

module.exports = function() {
  this.bindHook('sub_nav', function(app) {
    app.importRap = {
      name: 'Rap项目导入',
      path: '/project/:id/rap',
      component: ImportRapPage
    };
  });
};
