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
    .state('admin.product-create', {
      url: '/products/create',
      templateUrl: 'app/admin/products/create.html',
      controller: 'ProductsCreateCtrl',
      //controllerAs: 'admin.product.list',
      // restricted
      authenticate: true,
      onEnter: function($log) {
        $log.debug('enter admin.product-create');
      },
      onExit: function($log) {
        $log.debug('exit admin.product-create');
      }
    })
    .state('admin.product-edit', {
      url: '/products/edit/:id',
      templateUrl: 'app/admin/products/edit.html',
      controller: 'ProductsEditCtrl',
      //controllerAs: 'admin.user.update',
      // restricted
      authenticate: true,
      onEnter: function($log) {
        $log.debug('enter admin.product-edit');
      },
      onExit: function($log) {
        $log.debug('exit admin.product-edit');
      }
    })
    .state('admin.product-destroy', {
      url: '/products/destroy/:id',
      controller: 'ProductsDestroyCtrl',
      //controllerAs: 'admin.user.destroy',
      // restricted
      authenticate: true,
      onEnter: function($log) {
        $log.debug('enter admin.products-destroy');
      },
      onExit: function($log) {
        $log.debug('exit admin.products-destroy');
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
