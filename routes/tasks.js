var express = require('express');
var router = express.Router();
var multer = require('multer')
var upload = multer();
const taskController = require('../controllers/tasks');

const { Task } = require('../db/models');


router.get('/', function(req, res) {
     taskController.getAll(req,res);
});

router.get('/:id', function(req, res) {
    taskController.get(req, res);
});

router.post('/', upload.none(),  function(req,res) {
    taskController.store(req, res);
});

router.put('/:id', upload.none(), function(req, res) {
    taskController.update(req,res);
});

router.delete('/:id', function(req, res) {
   taskController.destroy(req,res);
});

module.exports = router;