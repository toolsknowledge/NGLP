const express = require("express");
const mongodb = require("mongodb");
const cors = require("cors");

const app = express();

app.use(express.json());

app.use(cors());

const ashokIT = mongodb.MongoClient;

app.get("/fetch",(req,res)=>{
    ashokIT.connect("mongodb+srv://admin:admin@miniprojectdb.nzphu.mongodb.net/ngrx-7am?retryWrites=true&w=majority",(err,connection)=>{
        if(err) throw err;
        else{
            const db = connection.db("ngrx-7am");
            db.collection("products").find().toArray((err,array)=>{
                if(err) throw err;
                else{
                    res.send(array);
                }
            });
        }
    });
});


app.post("/insert",(req,res)=>{
    ashokIT.connect("mongodb+srv://admin:admin@miniprojectdb.nzphu.mongodb.net/ngrx-7am?retryWrites=true&w=majority",(err,connection)=>{
        if(err) throw err;
        else{
            const db = connection.db("ngrx-7am");
            db.collection("products").insertOne({"p_name":req.body.p_name,
                                                 "p_cost":req.body.p_cost,
                                                 "rating":req.body.rating,
                                                 "image":req.body.image},(err,result)=>{
                    if(err) throw err;
                    else{
                        res.send({"insert":"success"});
                    }
            });
        }
    });
});


//update p_cost based on p_name
app.put("/update",(req,res)=>{
    ashokIT.connect("mongodb+srv://admin:admin@miniprojectdb.nzphu.mongodb.net/ngrx-7am?retryWrites=true&w=majority",(err,connection)=>{
        if(err) throw err;
        else{
            const db = connection.db("ngrx-7am"); 
            db.collection("products").updateOne({"p_name":req.body.p_name},
                                                {$set:{"p_cost":req.body.p_cost}},(err,result)=>{
                if(err) throw err;
                else{
                    res.send({"update":"success"});
                }
            });

        }
    });
});


//delete product based on p_name
app.delete("/delete",(req,res)=>{
    ashokIT.connect("mongodb+srv://admin:admin@miniprojectdb.nzphu.mongodb.net/ngrx-7am?retryWrites=true&w=majority",(err,connection)=>{
        if(err) throw err;
        else{
            const db = connection.db("ngrx-7am");
            db.collection("products").deleteOne({"p_name":req.body.p_name},(err,result)=>{
                if(err) throw err;
                else{
                    res.send({"delete":"success"});
                }
            })
        }
    });
});


app.listen(8080,()=>{
    console.log("server listening the port number 8080");
});
