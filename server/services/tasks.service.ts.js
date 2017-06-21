var config = require('../config.json');
var _ = require('lodash');
var Q = require('q');
var mongo = require('mongoskin');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
var db = mongo.db(config.connectionString, {native_parser: true});
db.bind('tasks');

var service = {};

service.add = add;
service.edit = edit;
service.getById = getById;
//service.delete = deleteTask;

module.exports = service;

function add(task) {
    var deferred = Q.defer();
    db.tasks.insert(task,
        function (err) {
            if (err) deferred.reject(err.name + ': ' + err.message);

            deferred.resolve();
        });


    return deferred.promise;
}

function edit(task) {
    var deferred = Q.defer();
    db.tasks.updateOne(
        {id: task.id},
        {task: task.task},
        function (err) {
            if (err) deferred.reject(err.name + ': ' + err.message);

            deferred.resolve();
        });

    return deferred.promise;
}

function getById(_id) {
    var deferred = Q.defer();
    console.log(_id);
    db.tasks.findOne({id: Number(_id)}, function (err, task) {
        if (err) deferred.reject(err.name + ': ' + err.message);
        console.log(task);
        if (task) {
            deferred.resolve(task);
        } else {
            deferred.resolve();
        }
    });

    return deferred.promise;
}

// function deleteTask(_id) {
//     var deferred = Q.defer();
//
//     db.tasks.remove(
//         {_id: mongo.helper.toObjectID(_id)},
//         function (err) {
//             if (err) deferred.reject(err.name + ': ' + err.message);
//
//             deferred.resolve();
//         });
//
//     return deferred.promise;
// }