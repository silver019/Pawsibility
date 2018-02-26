

module.exports = function(sequelize, DataTypes) {
    var Dog = sequelize.define("Dog", {
      
      breed: {
        type: DataTypes.STRING,
        allowNull: false
      },

      img: {
        type: DataTypes.STRING,
        allowNull: false
      },

      score: {
        type: DataTypes.STRING,
        allowNull: false
      }

     
    });
    return Dog;
  };