const pool = require("../../config/database");


module.exports = {
    create: (data, callBack) => {
        pool.query(
            `insert into new_table(firstname,lastName,gender,email,password,number)
    values(?,?,?,?,?,?);`, [

                data.firstName,
                data.lastName,
                data.gender,
                data.email,
                data.password,
                data.number
            ],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);

                }
                return callBack(null, results);
            }
        );
        console.log(data);

    },
    getUserbyEmail: (email, callBack) => {
        pool.query(

            `select * from new_table where email=?`, [email],
            (error, result, fields) => {
                if (error) {
                    callBack(error);

                }
                return callBack(null, result[0])
            }
        )

    },
    getAllUsers: (callBack) => {
        pool.query(
            `select * from new_table`, [],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        );
    }



};