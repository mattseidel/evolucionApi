
var mysql = require('mysql')

class Database {
    constructor() {
        this.connection = mysql.createPool({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'herbaLife'
        });
    }

    query(sql, args) {
        return new Promise((resolve, reject) => {
            this.connection.query(sql, args, (err, result) => {
                if (err) {
                    console.log(err);
                    
                    // console.log('this.sql', query.sql);
                    throw err;
                }
                resolve(result)
            })
        })
    }

    close() {
        return new Promise((resolve, reject) => {
            this.connection.end(err => {
                if (err)
                    return reject(err);
                resolve();
            });
        });
    }
}


module.exports = Database