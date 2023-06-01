import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
//  user register
export const register = async (req, res) => {
  // hashing password
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(req.body.katasandi, salt);

  try {
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      katasandi: hash,
      namad: req.body.namad,
      namab: req.body.namab,
      tmptlahir: req.body.tmptlahir,
      tgllahir: req.body.tgllahir,
      tmpttinggal: req.body.tmpttinggal,
      nohp: req.body.nohp,
    });

    await newUser.save();
    res.status(200).json({ success: true, message: "Successfully Created" });
  } catch (err) {
    res
      .status(500)
      .json({ success: false, message: "Failed to Create. Try again" });
  }
};

//  user login
export const login = async (req, res) => {
  const email = req.body.email;
  try {
    const user = await User.findOne({ email });
    // if user doesn't exist
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }
    // if user is exist then check the password or compare the password
    const checkCorrectKatasandi = await bcrypt.compare(
      req.body.katasandi,
      user.katasandi
    );
    // if password is incorrect
    if (!checkCorrectKatasandi) {
      return res
        .status(401)
        .json({ success: false, message: "Incorrect email or Password" });
    }

    const { Katasandi, role, ...rest } = user._doc;

    // create jwt token
    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "15d" }
    );

    // set token in the browser cookies and send the response to the client
    res
      .cookie("accessToken", token, {
        httpOnly: true,
        expires: token.expiresIn,
      })
      .status(200)
      .json({
        token,
        data: { ...rest },
        role,
      });
  } catch (err) {
    res.status(500).json({ success: false, message: "Failed to login" });
  }
};
