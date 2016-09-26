// export default class MongoService {
//   constructor() {
//     this.MongoClient = require('mongodb').MongoClient;
//   }
//
//   testConnection() {
//     return new Promise((resolve, reject) => {
//       this.MongoClient.connect("mongodb://localhost:27017/test", function(err, db) {
//         if(!err) {
//           resolve("We are connected");
//         } else {
//           reject(err);
//         }
//       });
//     });
//   }
// }
// export default class MongoService {
//
//     constructor() {
//     this.NodePouchDB = require('pouchdb');
//      this.leveldbDB = new NodePouchDB('mydb-leveldb');
//   }
//     testConnection() {
//         return new Promise((resolve, reject) => {
//       this.NodePouchDB.info("mongodb://localhost:27017/test", function(err,info) {
//         if(!err) {
//           resolve("We are connected");
//
//         } else {
//           reject(err);
//         }
//       });
//     });
//     };
// }