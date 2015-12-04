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
    // restricted
    authenticate: true,
    role: 'admin'
  })
  // PRODUCTS
  .state('admin.product-list', {
    url: '/products',
    title: 'Admin - Produktliste',
    templateUrl: 'app/admin/products/products.html',
    controller: 'ProductsCtrl',
    // restricted
    authenticate: true,
    role: 'admin'
  })
  .state('admin.product-create', {
    url: '/products/create',
    title: 'Admin - Produkt erstellen',
    templateUrl: 'app/admin/products/create.html',
    controller: 'ProductsCreateCtrl',
    // restricted
    authenticate: true,
    role: 'admin'
  })
  .state('admin.product-edit', {
    url: '/products/edit/:id',
    title: 'Admin - Produkt bearbeiten',
    templateUrl: 'app/admin/products/edit.html',
    controller: 'ProductsEditCtrl',
    // restricted
    authenticate: true,
    role: 'admin'
  })
  .state('admin.product-destroy', {
    url: '/products/destroy/:id',
    title: 'Admin - Produkt löschen',
    controller: 'ProductsDestroyCtrl',
    // restricted
    authenticate: true,
    role: 'admin'
  })
  // USERS
  .state('admin.user-list', {
    url: '/users',
    title: 'Admin - Benutzerliste',
    templateUrl: 'app/admin/user/list.html',
    controller: 'AdminUserListCtrl',
    // restricted
    authenticate: true,
    role: 'admin'
  })
  .state('admin.user-create', {
    url: '/users/create',
    title: 'Admin - Benutzer erstellen',
    templateUrl: 'app/admin/user/create.html',
    controller: 'AdminUserCreateCtrl',
    // restricted
    authenticate: true,
    role: 'admin'
  })
  .state('admin.user-destroy', {
    url: '/users/destroy/:id',
    title: 'Admin - Benutzer löschen',
    controller: 'AdminUserDestroyCtrl',
    // restricted
    authenticate: true,
    role: 'admin'
  })
  // ORDERS
  .state('admin.order-list', {
    url: '/orders',
    title: 'Admin - Bestellungen',
    templateUrl: 'app/admin/order/list.html',
    controller: 'AdminOrderListCtrl',
    // restricted
    authenticate: true,
    role: 'admin'
  })
  .state('admin.order-edit', {
    url: '/orders/edit/:id',
    title: 'Admin - Bestellung anpassen',
    templateUrl: 'app/admin/order/edit.html',
    controller: 'AdminOrderEditCtrl',
    // restricted
    authenticate: true,
    role: 'admin'
  })
  .state('admin.order-destroy', {
    url: '/orders/destroy/:id',
    title: 'Admin - Bestellung löschen',
    controller: 'AdminOrderDestroyCtrl',
    // restricted
    authenticate: true,
    role: 'admin'
  });
});
