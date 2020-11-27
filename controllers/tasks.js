const { Task } = require('../db/models');

function store(req, res) 
{
    if (!req.body.name) {
        res.status(422).json({ res: 'Name is required' });
        return false;
    }
    Task.create({
        name: req.body.name,
        status: 0
    }).then(() => {
        res.json({ res: 'A new task has been saved.' });
    });
}

function getAll(req, res) {
    Task.findAll().then((tasks) => {
        if (tasks.length == 0) res.status(404).json({ res: 'Could not find task' });
        res.send(tasks);
    });
}

function get(req, res) {
    Task.findAll({
        where: {
            id: req.params.id
        }
    }).then((task) => {
        if(task.length == 0) res.status(404).json({res: 'Could not find task'});
        res.send(task);
    });
}

function update(req, res) {
    Task.update({
        name: req.body.name,
        status: req.body.status
    },
    {
        where: {
            id: req.params.id
        }
    }).then(() => {
        res.json({ res: 'The Task has been updated.' });
    })
}

function destroy(req,res) {
    Task.destroy({
        where: {
            id: req.params.id
        }
    }).then(() => {
        res.json({ 'res': 'Task has been deleted' });
    });
}

module.exports = {
    store,
    getAll,
    get,
    destroy
}