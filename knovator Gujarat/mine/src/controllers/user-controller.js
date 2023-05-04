import UserModel from '../models/user-model.js';
import { generate } from '../routes/token.js';
import { getFindUserQuery } from '../routes/helper.js';
const LoginPost = async (req, res) => {
  let {
    body: { user, password },
  } = req;

  try {
    const getUser = await UserModel.findOne(getFindUserQuery(user));

    if (!getUser && !getUser.isValidPassword(password)) {
      return res.json({
        errors: [{ msg: 'User not found' }],
      });
    }

    res.json({
      user: getUser,
      token: generate(getUser._id),
    });
  } catch (err) {
    console.log(err);
    return res.json({
      errors: [{ msg: err }],
    });
  }
};

const RegisterPost = async (req, res) => {
  let {
    body: { email, username, password },
  } = req;

  try {
    const user = await UserModel.findOne({ email });

    if (user) {
      return res.json({
        errors: [{ msg: 'User Already exist by this username' }],
      });
    }

    const newUser = new UserModel({
      email,
      username,
      password,
    });

    await newUser.save();

    return res.json({ user: newUser });
  } catch (err) {
    console.log(err);

    return res.json({
      errors: [{ msg: err }],
    });
  }
};

export { LoginPost, RegisterPost };
