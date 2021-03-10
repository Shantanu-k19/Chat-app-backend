const pool= require('../../config/database');

module.exports={

    createTask : (data, callBack)=>{
        pool.query(`insert into todoTable(title,description,author,created_time,modified_time) values(?,?,?,?,?);`,
        [data.title,
        data.description,
        data.author,
        data.created_time,
        data.modified_time
    ],(err,results,fields)=>{
        if (err) {
            return callBack(error);

        }
        return callBack(null, results);


    }
        )


    },
    readTasks:(callBack) => {
        pool.query(
            `select * from todoTable`, [],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        );
    },


    deleteTask:(data,callBack)=>{
        pool.query(
            `delete from todoTable where Id = ?`,
            [data.Id],
            (error,results,fields)=>{
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }

            
        );

    },
    updateTask:(data,callBack)=>{
        pool.query(
            `update todoTable set title=? ,description=?,author=?,created_time=?,modified_time=? where Id=?`,
            [   data.title,
                data.description,
                data.author,
                data.created_time,
                data.modified_time,
                data.Id
            ],
            (error,results,fields)=>{
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }

            
        )

    }


    }






/* insert into todoTable values 
(11,'study','study for xxyz','ashok','1998-01-23 12:45:56','1998-01-23 12:45:56'); */