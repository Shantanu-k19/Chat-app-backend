const { createTask,readTasks,deleteTask,updateTask }=require('../app/app.services');

module.exports={
    createTaskControl:(req,res)=>{
        const body=req.body;
        createTask(body,(err,result)=>{
            if (err) {
                console.log(err);
                return res.status(500).json({
                    success: 0,
                    message: "Database connection error"
                });

            }
            return res.status(200).json({
                success: 1,
                data: result
            });
        });
    },
    readTaskControl: (req, res) => {
        readTasks((err, results) => {
            if (err) {
                console.log(err);
            }
            return res.json({
                success: 1,
                data: results
            });
            


        })

    },
    deleteTaskControl:(req,res)=>{
        const body=req.body;
        deleteTask(body,(err,result)=>{
            if (err) {
                console.log(err);
                return res.status(500).json({
                    success: 0,
                    message: "Database connection error"
                });

            }
            return res.status(200).json({
                success: 1,
                data: result
            });
        });


    },
    updateTaskControl:(req,res)=>{
        body=req.body;
        console.log(body);
        updateTask(body,(err,result)=>{
            if(err){
                res.status(500).json({
                    success: 0,
                    message: "Database connection error"
                });
            }
            else{
                res.status(200).json({
                    success: 1,
                data: result
                });
            }

        });

    }
    
}