const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path  = require("path");
const Todo = require("./models/Todo");
const ServerlessHttp = require('serverless-http')

require('dotenv').config({path:__dirname+'/./../.env'})

console.log(process.env.MONGO_URL_DOCKER, process.env.NODE_ENV)

mongoose.connect(process.env.MONGO_URL_DOCKER, 
{ useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false},(e) => {
    if(e) {
      console.log('fail to connect Database: '+ e);
      process.exit(1);
    }
  }
);

mongoose.connection.once("open", () => {
  console.log("Mongodb connection established successfully");
});

const PORT = 4000;

const app = express();
app.use(cors());
app.use(express.json());

app.get("/api/todo", (req, res) => {
  Todo.find((err, todos) => {
    if (err) {
      res.status(404).send("Todos not found");
    } else {
      res.json(todos);
    }
  });
});

app.post("/api/todo/create", (req, res) => {
  const todo = new Todo(req.body);
  todo
    .save()
    .then((todo) => {
      res.json(todo);
    })
    .catch((err) => {
      res.status(500).send(err.message);
    });
});

app.get("/api/todo/:id", (req, res) => {
  const id = req.params.id;
  Todo.findById(id, (err, todo) => {
    if(err){
      res.status(404).send("Todo not found");
    } else {
      res.json(todo);
    }
  });
});

app.delete("/api/todo/:id", (req, res) => {
  const id = req.params.id;
  Todo.findByIdAndRemove(id)
  .then(todo =>{
      res.json(todo);  
  })
  .catch(err=>{
      res.status(500).send(err.message);
  });
});

app.post("/api/todo/:id", (req, res) => {
  const id = req.params.id;
  Todo.findById(id, (err, todo) => {
    if (err) {
      res.status(404).send("Todo not found");
    } else {
      todo.text = req.body.text;

      todo
        .save()
        .then((todo) => {
          res.json(todo);
        })
        .catch((err) => res.status(500).send(err.message));
    }
  });
});

app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});

module.exports.handler = ServerlessHttp(app);
