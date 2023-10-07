import express from "express";
import connection from "./config.js";
import userModel from "./models/User.model.js";
import Jwt from "jsonwebtoken";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  return res.send("On HomePage");
});

app.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;

  const user = new userModel({
    email,
    password,
    name,
  });

  await user.save();
  res.send("signup successful");
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await userModel.find({ email, password });

  const token = Jwt.sign({ email: user.email, name: user.name }, "secret");

  console.log(user);
  if (user.length == 0) {
    return res.send("invalid credntials");
  }
  return res.send({ user: user, token: token });
});

app.get("/profile/:id", async (req, res) => {
  

  /** hard coded method 

     if(Number(token)!==12345){
         res.send("Token expired");
     }

     */


     /*passing token through query params

     const user_token = req.query.q;

     */

     //   passing token through headers

const user_token=req.headers.auth;

  Jwt.verify(user_token, "secret", function (err, decoded) {
    // err
    // decoded undefined
    if (err) {
      return res.send("Please login again");
    }
    console.log(decoded);
  });

  



  try {
    const user = await userModel.find({ _id: req.params.id });
    return res.send(user);
  } catch {
    res.send("User not found");
  }
});

app.listen(5000, async () => {
  try {
    await connection;
    console.log("db connected");
  } catch {
    console.log(failed);
  }
});
