/*==================================================
/database/models/Campus.js

It defines the campus model for the database.
==================================================*/
const Sequelize = require('sequelize');  // Import Sequelize
const db = require('../db');  // Import Sequelize database instance called "db"

// Define the campus model
const Campus = db.define("campus", {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },

  address: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: true
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: "https://www.usnews.com/object/image/00000189-30bd-d6f6-a99b-ffbd1f840000/gettyimages-1478520911.jpg?update-time=1688739913761&size=responsive970.jpg",
    allowNull: true
  }
});

// Export the campus model
module.exports = Campus;
