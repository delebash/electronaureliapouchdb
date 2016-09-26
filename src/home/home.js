import {inject} from 'aurelia-framework';

export class Home {
    constructor() {
        this.connectionResults = "";
    }

    activate() {
        // this.leveldbDB.info().then(function (info) {
        //     connectionResults = '&#10004; We can use PouchDB with LevelDB!';
        // }).catch(function (err) {
        //     connectionResults = 'Error for LevelDB';
        // });
       // alert('trdt')
        this.connectionResults = 'Error for LevelDB';
    //     this.leveldbDB.testConnection()
    //         .then((promise) => this.connectionResults = promise)
    //         .catch((err) => this.connectionResults = err);
    // }
    }
}
