module.exports = (sequelize, DataTypes) => {
  const SocialUser = sequelize.define(
    "SocialUser",
    {
      idx: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING(500),
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING(500),
        allowNull: true,
      },
      oAuthId: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      freezeTableName: true,
      timestamps: true,
      comment: "소셜 유저 테이블",
    }
  );
  return SocialUser;
};
