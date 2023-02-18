const express = require("express");
const noteRouter = express.Router();
const { noteModel } = require("../model/notes.model");
const jwt = require("jsonwebtoken");

noteRouter.get("/", async (req, res) => {
  // const notes=await noteModel.find()
  //   res.send(notes);
  const token = req.headers.authorization;
  const decoded = jwt.verify(token, "masai");
  try {
    const data = await noteModel.find({ user: decoded.userID });
    res.send(data);
  } catch (err) {
    res.send(err);
  }
});

noteRouter.post("/create", async (req, res) => {
  const payload = req.body;
  const note = new noteModel(payload);
  await note.save();
  res.send("msg created");
});
noteRouter.patch("/update/:id", async (req, res) => {
  const payload = req.body;
  const noteID = req.params.id;
  const note = await noteModel.findOne({ _id: noteID });
  console.log("note :", note.user);
  console.log("payload :", payload);
  console.log("noteid :", noteID);
  //   63f11b32f37eb6ac54fa4c3d
  const userid_note = note.user;

  const userid_making_req = req.body.user;
  try {
    if (userid_making_req != userid_note) {
      res.send("NOT AUTHORIZED");
    } else {
      await noteModel.findByIdAndUpdate({ _id: noteID }, payload);
      res.send("update the notes");
    }
  } catch (err) {
    console.log(err);
  }
});

noteRouter.delete("/delete/:id", async (req, res) => {
  const noteID = req.params.id;
  const note = await noteModel.findOne({ _id: noteID });
  console.log("note :", note.user);

  console.log("noteid :", noteID);
  //   63f11b32f37eb6ac54fa4c3d
  const userid_note = note.user;

  const userid_making_req = req.body.user;
  try {
    if (userid_making_req != userid_note) {
      res.send("NOT AUTHORIZED");
    } else {
      await noteModel.findByIdAndDelete({ _id: noteID });
      res.send("delete the notes");
    }
  } catch (err) {
    console.log(err);
  }
});

module.exports = { noteRouter };
