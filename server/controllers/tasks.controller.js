var config = require('../config.json');
var express = require('express');
var router = express.Router();
var tasksService = require('../services/tasks.service.ts');

// routes
router.post('/add', add);
router.post('/edit', edit);
router.get('/current', getCurrent);
// router.get('/all', getAll);
// router.delete('/:_id', deleteUser);

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
// function getAll(req, res) {
//     tasksService.getAll(req.task.user_id)
//         .then(function (task) {
//             if (task) {
//                 res.send(task);
//             } else {
//                 res.sendStatus(404);
//             }
//         })
//         .catch(function (err) {
//             res.status(400).send(err);
//         });
// }
//
// function deleteUser(req, res) {
//     tasksService.delete(req.params._id)
//         .then(function () {
//             res.sendStatus(200);
//         })
//         .catch(function (err) {
//             res.status(400).send(err);
//         });
// }