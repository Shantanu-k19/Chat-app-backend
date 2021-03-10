const { createPool } = require("mysql");
const pool = createPool({
    port:3306,
    host:"127.0.0.1",
    user:"root",
    password:"Password@123",
    database:"nodejs",
    connectionLimit: 10
});
module.exports = pool;