module.exports = (sequelize, DataTypes) => {
  const Animal = sequelize.define('Animal', {
    name: DataTypes.STRING,
    breed: DataTypes.STRING,
    age: DataTypes.INTEGER,
    location: DataTypes.STRING,
    description: DataTypes.TEXT,
    imageURL: DataTypes.STRING
   }) 
   return Animal
}