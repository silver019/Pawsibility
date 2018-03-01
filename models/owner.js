

module.exports = function(sequelize, DataTypes) {
    var Owner = sequelize.define("Owner", {

      name:{
        type:DataTypes.STRING,
      },

      email:{
        type:DataTypes.STRING
      },

      zipcode:{
        type:DataTypes.STRING
      },

      scores: {
      	type:DataTypes.INTEGER
      }


     
    });
    return Owner;
  };
