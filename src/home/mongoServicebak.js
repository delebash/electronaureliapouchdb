export default class MongoService {
    constructor() {
        this.MongoClient = require('mongodb').MongoClient;
    }

    testConnection() {
        return new Promise((resolve, reject) => {
            this.MongoClient.connect("mongodb://localhost:27017/test", function(err, db) {
                if(!err) {
                    resolve("We are connected");
                } else {
                    reject(err);
                }
            });
        });
    }
}



//
// export default class MongoService {
//     constructor() {
//         this.MongoClient = require('mongodb').MongoClient;
//         var NodePouchDB = require('pouchdb');
//         this.NodePouchDb =NodePouchDb;
//         this.MongoClient = require('mongodb').MongoClient;;
//     }
//
//     testConnection() {
//
//         // var leveldbDB = new NodePouchDB('mydb-leveldb');
//
//         return new Promise((resolve, reject) => {
//             this.MongoClient.connect("mongodb://localhost:27017/test", function(err, db) {
//                 if(!err) {
//                     resolve("We are connected");
//                 } else {
//                     reject(err);
//                 }
//             });
//         });
//     }
// }

