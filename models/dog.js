/* eslint-disable camelcase */
module.exports = (sequelize, DataTypes) => {
  
  const dog = sequelize.define("dog", {
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
    stage: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    assigned_walker: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    total_walks: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });
  return dog;
};
