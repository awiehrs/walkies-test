/* eslint-disable camelcase */
module.exports = (sequelize, DataTypes) => {
  const dog = sequelize.define("dog", {
    dog_name: {
      type: DataTypes.VARCHAR,
      allowNull: false
    },
    breed: {
      type: DataTypes.VARCHAR,
      allowNull: false
    },
    owner_name: {
      type: DataTypes.VARCHAR,
      allowNull: false
    },
    address: {
      type: DataTypes.VARCHAR,
      allowNull: false
    },
    phone_number: {
      type: DataTypes.VARCHAR,
      allowNull: false
    },
    extra_notes: DataTypes.TEXT,
    stage: {
      type: DataTypes.INT,
      defaultValue: 0
    },
    assigned_walker: {
      type: DataTypes.INT,
      defaultValue: 0
    },
    total_walks: DataTypes.INT
  });
  return dog;
};
