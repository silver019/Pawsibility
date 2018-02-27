

module.exports = function(sequelize, DataTypes) {
    var Dog = sequelize.define("Dog", {
      
      breed: {
        type: DataTypes.STRING,
      },

      img: {
        type: DataTypes.STRING,
      },

      score: {
        type: DataTypes.STRING,
      }, 

      name:{
        type:DataTypes.STRING,
      },

      email:{
        type:DataTypes.STRING
      },

      zipcode:{
        type:DataTypes.STRING
      }


     
    });
    return Dog;
  };

  