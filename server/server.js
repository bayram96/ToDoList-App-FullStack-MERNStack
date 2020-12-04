const express = require("express");
const mongoose = require("mongoose");
const { Schema } = mongoose;

const app = express();

app.use(express.json());

const db = "mongodb://localhost:27017/myfullstackapp";

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

const todoSchema = new Schema({
  title: { type: String },
  complete: { type: Boolean, default: false },
});

const Todo = mongoose.model("Todo", todoSchema);

app.get("/todos", (req, res) => {
  Todo.find({}, (err, data) => {
    if (err) return res.json({ err: err });
    //console.log(data);
    res.json(data);
  });
});

app.post("/todos", (req, res) => {
  const newTodo = new Todo({
    title: req.body.title,
    complete: req.body.complete,
  });
  newTodo.save((err, data) => {
    if (err) return res.json({ err: err });
    res.json(data);
  });
});

app.delete("/todos/:id", (req, res) => {
  Todo.findByIdAndDelete(req.params.id, (err, data) => {
    if (err) return res.json({ err: err });
    res.json({ msg: "data removed" });
  });
});
app.put("/todos/:id", (req, res) => {
  Todo.findOneAndUpdate(
    { _id: req.params.id },
    { complete: req.body.complete },
    { new: true },
    (err, data) => {
      if (err) return res.json({ err: err });
      res.json({ msg: "data updated" });
    }
  );
});

app.listen(5000, () => {
  console.log("server is running at port 5000");
});
