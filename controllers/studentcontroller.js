const db = require("../models");
const Student = db.students;
const Oup = db.Sequelize.Oup;

// Create and Save a new Student
exports.create = (req, res) => {
  
};

// Retrieve all Students from the database.
exports.findAll = (req, res) => {
  
};

// Find a single Student with an id
exports.findOne = (req, res) => {
  
};

// Update a Student by the id in the request
exports.update = (req, res) => {
  
};

// Delete a Student with the specified id in the request
exports.delete = (req, res) => {
  
};

// Delete all Students from the database.
exports.deleteAll = (req, res) => {
  
};

exports.create = (req, res) => {
    if (!req.body.first_name) {
        res.status(400).send({
            message: "firstname can not be empty!"
        });
        return;
    }
    if (!req.body.last_name) {
        res.status(400).send({
            message: "lastname can not be empty!"
        });
        return;
    }
    if (!req.body.email) {
        res.status(400).send({
            message: "email can not be empty!"
        });
        return;
    }
    if (!req.body.mobile_number) {
        res.status(400).send({
            message: "Mobile number can not be empty!"
        });
        return;
    }
    if (!req.body.date_of_birth) {
        res.status(400).send({
            message: "Date of birth can not be empty!"
        });
        return;
    }
    if (!req.body.graduation_year) {
        res.status(400).send({
            message: "Graduation year not be empty!"
        });
        return;
    }
    const student = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        mobile_number: req.body.mobile_number,
        date_of_birth: req.body.date_of_birth,
        graduation_year: req.body.graduation_year
    };
    Student.create(student)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while adding employe."
            });
        });
};

exports.findAll = (req, res) => {
    Student.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving all Students."
            });
        });
};

exports.findOne = (req, res) => {
    const id = req.params.id;

    Student.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Student with id=" + id
            });
        });
};

exports.update = (req, res) => {
    const id = req.params.id;

    Student.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Student was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Student with id=${id}. Maybe Student was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Student with id=" + id
            });
        });
};

exports.delete = (req, res) => {
    const id = req.params.id;

    Student.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Student was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Student with id=${id}. Maybe Student was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Student with id=" + id
            });
        });
};

exports.deleteAll = (req, res) => {
    Student.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} Students were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all Students."
            });
        });
};
