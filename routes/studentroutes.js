module.exports = app => {
    const students = require("../controllers/studentcontroller.js");  
    var router = require("express").Router();
  
    // Create a new Student
    router.post("/", students.create);
  
    app.use('/api/student', router);
  };