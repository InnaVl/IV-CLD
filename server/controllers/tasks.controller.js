var config = require('../config.json');
var express = require('express');
var router = express.Router();
var tasksService = require('../services/tasks.service.ts');

// routes
router.post('/add', add);
router.post('/edit', edit);
router.get('/current', getCurrent);
router.get('/all', getAll);
router.get('/day', getForDay);
router.get('/month', getForMonth);
router.delete('/delete', deleteTask);


module.exports = router;

function add(req, res) {
    tasksService.add(req.body)
        .then(function () {
            res.sendStatus(200);
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}

function edit(req, res) {
    tasksService.edit(req.body)
        .then(function () {
            res.sendStatus(200);
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}

function getCurrent(req, res) {
    tasksService.getById(req.query.id)
        .then(function (task) {
            if (task) {
                res.send(task);
            } else {
                res.sendStatus(404);
            }
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}
function getAll(req, res) {
    tasksService.getAllUserTasks(req.query.username)
        .then(function (task) {
            if (task) {
                res.send(task);
            } else {
                res.sendStatus(404);
            }
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}
function getForDay(req, res) {
    tasksService.getTaskForDay(
        req.query.username,
        req.query.day,
        req.query.month,
        req.query.year
    ).then(function (task) {
        if (task) {
            res.send(task);
        } else {
            res.sendStatus(404);
        }
    })
        .catch(function (err) {
            res.status(400).send(err);
        });
}

function getForMonth(req, res) {
    tasksService.getAllForMonth(req.query.username, req.query.month, req.query.year)
        .then(function (task) {
            if (task) {
                res.send(task);
            } else {
                res.sendStatus(404);
            }
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}

function deleteTask(req, res) {
    tasksService.delete(req.query.taskId, req.query.username)
        .then(function () {
            res.sendStatus(200);
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}