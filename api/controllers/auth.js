import User from '../models/User.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const register = async (req, res, next) => {
    try {

        const salt = bcrypt.genSaltSync(10);
        const hashPassword = bcrypt.hashSync(req.body.password, salt);

        const newUser = new User({
            ...req.body,
            password: hashPassword
        })

        const savedUser = await newUser.save();
        console.log(savedUser)
        res.status(200).json("User has been created")
    }
    catch (err) {
        console.log(err);
    }
}

export const login = async () => {
    const user = await User.findOne({ username: req.body.username });
    if (!user) {
        return res.status(500).json("User not found!!!");
    }

    const isPassword = await bcrypt.compare(req.body.password, user.password)

    if (!isPassword) {
        return res.status(500).json("wrong Username or password!!!");
    }

    const token = jwt.sign({ id: user._id, isAdmin: user.isAdmin }, process.env.JWT)

    res.cookie("access_token", token, { httpOnly: true }).status(200).json(user)
}