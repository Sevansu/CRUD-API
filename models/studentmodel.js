module.exports = (sequelize, Sequelize) => {
  const Student = sequelize.define("student_details", {
    first_name: {
      type: Sequelize.STRING
    },
    last_name: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    },
    mobile_number: {
      type: Sequelize.STRING(10)
    },
    date_of_birth: {
      type: Sequelize.DATEONLY
    },
    graduation_year: {
      type: Sequelize.STRING(4)
    }
  });

  return Student;
};
