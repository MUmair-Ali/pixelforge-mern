import User from '../models/user.model.js';

const home = async (req, res) => {

    try {
        res.status(200).send('Home Page');
    } catch (error) {
        const err = {
            status: 404,
            message: "Page not Found",
            details: error.message
        }
        next(err);
    }

}

const register = async (req, res) => {
    try {
        console.log(req.body);
        const {firstname, lastname, username, email, phone, password} = req.body;

        const userExists = await User.findOne({email});

        if(userExists){
            return res.status(400).json({message: "User already exists"});
        }

        const userCreated = await User.create({firstname, lastname, username, email, phone, password});


        res
          .status(201)
          .json({message: "User created successfully", user: userCreated, token: await userCreated.generateToken()});
    } catch (error) {
        const err = {
            status: 500,
            message: "Internal Server Error",
            details: error.message
        }
        next(err);
    }
}

const login = async (req, res) => {
    try {

        console.log(req.body);

        const {email, password} = req.body;

        const userExists = await User.findOne({email});

        if(!userExists){
            return res.status(400).json({message: "Invalid credentials"});
        }

        const isUserAuthentic = await userExists.authenticateUser(password);

        if(!isUserAuthentic){
            return res.status(401).json({message: "Invalid email or password"});
        }

        res
          .status(200)
          .json({message: "Login successful", userId: userExists._id.toString(), token: await userExists.generateToken()});

    } catch (error) {
        const err = {
            status: 500,
            message: "Internal Server Error",
            details: error.message
        }
        next(err);
    }
}

const user = async (req, res) => {
    try {
        const user = req.user;
        return res.status(200).json({user})

    } catch (error) {
        const err = {
            status: 404,
            message: "User Not Found",
            details: error.message
        }
        next(err);
    }
}

export default {home, register, login, user};