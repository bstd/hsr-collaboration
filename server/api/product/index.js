'use strict';

var express = require('express');
var controller = require('./product.controller');
var Product = require('./product.model');
var config = require('../../config/environment');
var auth = require('../../auth/auth.service');
var multer = require('multer');

//multer config
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, __dirname + '../../../uploads/'); // Absolute path. Folder must exist, will not be created for you.
  }/*,
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }*/
})
var upload = multer({ storage: storage,
  fileFilter: function (req, file, cb) {
  cb(null, (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' || file.mimetype === 'image/gif'))
}
});
var cpUpload = upload.single('file');

var router = express.Router();

//router
router.get('/', controller.index);
router.get('/:id', controller.show);
router.get('/search/:id', controller.search);
router.post('/', auth.hasRole('admin'), cpUpload, controller.create);
router.put('/:id', auth.hasRole('admin'), cpUpload, controller.update);
router.patch('/:id', auth.hasRole('admin'), controller.update);
router.delete('/:id', auth.hasRole('admin'), controller.destroy);

module.exports = router;

