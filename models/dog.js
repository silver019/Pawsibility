

module.exports = function(sequelize, DataTypes) {
    var Dog = sequelize.define("Dog", {
      
      breed: {
        type: DataTypes.STRING
      },

      img: {
        type: DataTypes.STRING
      },

      score: {
        type: DataTypes.INTEGER
      }
     
    });
    return Dog;
  };

  