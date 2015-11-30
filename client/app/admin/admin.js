'use strict';

/*
 * clientside route restrictions:
 *  authenticate: {Boolean} -> user must be logged in
 *  role: {String} -> user must have role
 */

angular.module('brewApp')
.config(function($stateProvider) {
  $stateProvider
  .state('admin', {
    url: '/admin',
    title: 'Adminbereich',
    templateUrl: 'app/admin/admin.html',
    controller: 'AdminCtrl',
    //controllerAs: 'admin',
    // restricted
    authenticate: true,
    role: 'admin',
    onEnter: function($log) {
      $log.debug('enter admin');
    },
    onExit: function($log) {
      $log.debug('exit admin');
    }
  })
  .state('admin.product-list', {
    url: '/products',
    title: 'Admin - Produktliste',
    templateUrl: 'app/admin/products/products.html',
    controller: 'ProductsCtrl',
    //controllerAs: 'admin.product.list',
    // restricted
    authenticate: true,
    role: 'admin',
    onEnter: function($log) {
      $log.debug('enter admin.product-list');
    },
    onExit: function($log) {
      $log.debug('exit admin.product-list');
    }
  })
  .state('admin.product-create', {
    url: '/products/create',
    title: 'Admin - Produkt erstellen',
    templateUrl: 'app/admin/products/edit.html',
    controller: 'ProductsCreateCtrl',
    //controllerAs: 'admin.product.list',
    // restricted
    authenticate: true,
    role: 'admin',
    onEnter: function($log) {
      $log.debug('enter admin.product-create');
    },
    onExit: function($log) {
      $log.debug('exit admin.product-create');
    }
  })
  .state('admin.product-edit', {
    url: '/products/edit/:id',
    title: 'Admin - Produkt bearbeiten',
    templateUrl: 'app/admin/products/edit.html',
    controller: 'ProductsEditCtrl',
    //controllerAs: 'admin.user.update',
    // restricted
    authenticate: true,
    role: 'admin',
    onEnter: function($log) {
      $log.debug('enter admin.product-edit');
    },
    onExit: function($log) {
      $log.debug('exit admin.product-edit');
    }
  })
  .state('admin.product-destroy', {
    url: '/products/destroy/:id',
    title: 'Admin - Produkt löschen',
    controller: 'ProductsDestroyCtrl',
    //controllerAs: 'admin.user.destroy',
    // restricted
    authenticate: true,
    role: 'admin',
    onEnter: function($log) {
      $log.debug('enter admin.products-destroy');
    },
    onExit: function($log) {
      $log.debug('exit admin.products-destroy');
    }
  })
  .state('admin.user-list', {
    url: '/users',
    title: 'Admin - Benutzerliste',
    templateUrl: 'app/admin/user/list.html',
    controller: 'AdminUserListCtrl',
    //controllerAs: 'admin.user.list',
    // restricted
    authenticate: true,
    role: 'admin',
    onEnter: function($log) {
      $log.debug('enter admin.user-list');
    },
    onExit: function($log) {
      $log.debug('exit admin.user-list');
    }
  })
  .state('admin.user-create', {
    url: '/users/create',
    title: 'Admin - Benutzer erstellen',
    templateUrl: 'app/admin/user/create.html',
    controller: 'AdminUserCreateCtrl',
    //controllerAs: 'admin.user.create',
    // restricted
    authenticate: true,
    role: 'admin',
    onEnter: function($log) {
      $log.debug('enter admin.user-create');
    },
    onExit: function($log) {
      $log.debug('exit admin.user-create');
    }
  })
  .state('admin.user-destroy', {
    url: '/users/destroy/:id',
    title: 'Admin - Benutzer löschen',
    controller: 'AdminUserDestroyCtrl',
    //controllerAs: 'admin.user.destroy',
    // restricted
    authenticate: true,
    role: 'admin',
    onEnter: function($log) {
      $log.debug('enter admin.user-destroy');
    },
    onExit: function($log) {
      $log.debug('exit admin.user-destroy');
    }
  });
});
