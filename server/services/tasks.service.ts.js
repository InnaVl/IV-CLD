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
service.getAllUserTasks = getAllUserTasks;
service.delete = deleteTask;
service.getAllForMonth = getAllForMonth;
service.getTaskForDay = getTaskForDay;

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

function getById(taskId) {
    var deferred = Q.defer();
    db.tasks.findOne({taskId: Number(taskId)}, function (err, task) {
        if (err) deferred.reject(err.name + ': ' + err.message);
        if (task) {
            deferred.resolve(task);
        } else {
            deferred.resolve();
        }
    });

    return deferred.promise;
}
function getAllUserTasks(username) {
    var deferred = Q.defer();
    db.tasks.findItems({username: username}, function (err, task) {
        if (err) deferred.reject(err.name + ': ' + err.message);
        if (task) {
            deferred.resolve(task);
        } else {
            deferred.resolve();
        }
    });

    return deferred.promise;
}
function getAllForMonth(username, month, year) {
    var deferred = Q.defer();
    db.tasks.findItems({
        $and: [
            {username: username},
            {month: Number(month)},
            {year: Number(year)}
        ]
    }, function (err, task) {
        if (err) deferred.reject(err.name + ': ' + err.message);
        if (task) {
            deferred.resolve(task);
        } else {
            deferred.resolve();
        }
    });

    return deferred.promise;
}

function getTaskForDay(username, day, month, year) {
    var deferred = Q.defer();
    db.tasks.findItems({
        $and: [
            {username: username},
            {day: Number(day)},
            {month: Number(month)},
            {year: Number(year)}
        ]
    }, function (err, task) {
        if (err) deferred.reject(err.name + ': ' + err.message);
        if (task) {
            deferred.resolve(task);
        } else {
            deferred.resolve();
        }
    });

    return deferred.promise;
}

function deleteTask(id, username) {
    var deferred = Q.defer();
    db.tasks.remove({
            $and: [
                {username: username},
                {taskId: Number(id)}
            ]
        },
        function (err) {
            if (err) deferred.reject(err.name + ': ' + err.message);

            deferred.resolve();
        });

    return deferred.promise;
}