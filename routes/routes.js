const express = require('express');
const todoController = require('../controller/todo')
const router = express.Router();

router.get('/', todoController.getAll);
router.post('/add', todoController.addTodo);
router.delete('/delete/:id', todoController.deleteTodo);
router.patch('/update/:id', todoController.updateTodo);

module.exports = router;