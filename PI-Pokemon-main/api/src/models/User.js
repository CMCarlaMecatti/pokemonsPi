const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
   sequelize.define('user', {
      userId: {
         type: DataTypes.INTEGER,
         allowNull: false,
         primaryKey: true,
         autoIncrement: true
       },
       username: {
         type: DataTypes.STRING,
         allowNull: false
       },
      email: {
         type: DataTypes.STRING,
         allowNull: false,
         isEmail:true
      },
      password: {
         type: DataTypes.STRING,
         allowNull:false
      }

   }, { timestamps: false });
};