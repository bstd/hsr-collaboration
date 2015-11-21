'use strict';

angular.module('brewApp')
.config(function($stateProvider) {
  $stateProvider
  .state('admin', {
    url: '/admin',
    templateUrl: 'app/admin/admin.html',
    controller: 'AdminCtrl',
    //controllerAs: 'admin',
    // restricted
    authenticate: true,
    onEnter: function($log) {
      $log.debug('enter admin');
    },
    onExit: function($log) {
      $log.debug('exit admin');
    }
  })
  .state('admin.product-list', {
    url: '/products',
    templateUrl: 'app/admin/products/products.html',
    controller: 'ProductsCtrl',
    //controllerAs: 'admin.product.list',
    // restricted
    authenticate: true,
    onEnter: function($log) {
      $log.debug('enter admin.product-list');
    },
    onExit: function($log) {
      $log.debug('exit admin.product-list');
    }
  })
  .state('admin.user-list', {
    url: '/users',
    templateUrl: 'app/admin/user/list.html',
    controller: 'AdminUserListCtrl',
    //controllerAs: 'admin.user.list',
    // restricted
    authenticate: true,
    onEnter: function($log) {
      $log.debug('enter admin.user-list');
    },
    onExit: function($log) {
      $log.debug('exit admin.user-list');
    }
  })
  .state('admin.user-create', {
    url: '/users/create',
    templateUrl: 'app/admin/user/create.html',
    controller: 'AdminUserCreateCtrl',
    //controllerAs: 'admin.user.create',
    // restricted
    authenticate: true,
    onEnter: function($log) {
      $log.debug('enter admin.user-create');
    },
    onExit: function($log) {
      $log.debug('exit admin.user-create');
    }
  })
  .state('admin.user-update', {
    url: '/users/update/:id',
    templateUrl: 'app/admin/user/update.html',
    controller: 'AdminUserUpdateCtrl',
    //controllerAs: 'admin.user.update',
    // restricted
    authenticate: true,
    onEnter: function($log) {
      $log.debug('enter admin.user-update');
    },
    onExit: function($log) {
      $log.debug('exit admin.user-update');
    }
  })
  .state('admin.user-destroy', {
    url: '/users/destroy/:id',
    controller: 'AdminUserDestroyCtrl',
    //controllerAs: 'admin.user.destroy',
    // restricted
    authenticate: true,
    onEnter: function($log) {
      $log.debug('enter admin.user-destroy');
    },
    onExit: function($log) {
      $log.debug('exit admin.user-destroy');
    }
  });
});
