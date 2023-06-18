const Todo = require('../models/todo')

exports.getAll = (req,res)=>{
    Todo.findAll()
    .then(data => {
        res.json(data)
    })
}

exports.addTodo = (req,res)=>{
    console.log(req.body)
    const obj = {
        name : req.body.name,
        description : req.body.description
    }

    Todo.create(obj).then(()=>{
        res.json("status",200)
    });
}

exports.deleteTodo =(req,res) => {
    const id = req.params.id;
    console.log("deleteTodo");
    Todo.destroy({
        where : {id:id}
    }).then(() => res.status(200))
}

exports.updateTodo = (req, res) => {
    const id = req.params.id;
    Todo.update({done: true}, {
        where : {id:id}
    })
}