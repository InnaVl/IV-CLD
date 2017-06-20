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

// function getById(_id) {
//     var deferred = Q.defer();
//
//     db.users.findById(_id, function (err, user) {
//         if (err) deferred.reject(err.name + ': ' + err.message);
//
//         if (user) {
//             // return user (without hashed password)
//             deferred.resolve(_.omit(user, 'hash'));
//         } else {
//             // user not found
//             deferred.resolve();
//         }
//     });
//
//     return deferred.promise;
// }

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