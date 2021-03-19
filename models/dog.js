/* eslint-disable camelcase */
module.exports = (sequelize, DataTypes) => {
  const Dog = sequelize.define("Dog", {
    dog_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    breed: {
      type: DataTypes.STRING,
      allowNull: false
    },
    owner_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false
    },
    phone_number: {
      type: DataTypes.STRING,
      allowNull: false
    },
    extra_notes: DataTypes.TEXT,
    needswalk: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    total_walks: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });
  return Dog;
};
