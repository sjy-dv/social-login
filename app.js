const express = require("express");
const app = express();
const cors = require("cors");
const logger = require("morgan");
const dotenv = require("dotenv");
dotenv.config();
const db = require("./models");

db.sequelize.authenticate().then(async () => {
  try {
    await db.sequelize.sync({ force: false });
  } catch (error) {}
});
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(logger("dev"));

app.post("/kakaologin", async (req, res) => {
  try {
    let { oAuthId, email } = req.body;
    const kakoLogin = await db.SocialUser.findOrCreate({
      where: {
        oAuthId: oAuthId,
      },
      defaults: {
        email: email,
        password: "소셜 계정 유저",
      },
    });

    if (kakoLogin[0].isNewRecord) {
      return res.status(200).json({ result: "가입되었으니 토큰 발행" });
    } else {
      return res.status(200).json({ result: "바로 토큰발행" });
    }
  } catch (error) {}
});

app.listen(8081);
