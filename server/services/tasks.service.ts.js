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
        {
            $and: [
                {username: task.username},
                {taskId: Number(task.taskId)}
            ]
        },
        {
            taskId: Number(task.taskId),
            username: task.username,
            date: task.date,
            action: task.action,
            priority: task.priority
        },
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
function getAllForMonth(username, date) {
    var deferred = Q.defer();
    var subDate = '^' + date.substring(0, 6) + '-[0-9]{2}';
    db.tasks.findItems({
        $and: [
            {username: username},
            {date: {$regex: subDate}}
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

function getTaskForDay(username, date) {
    var deferred = Q.defer();
    db.tasks.findItems({
        $and: [
            {username: username},
            {date: date}
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