import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required:true
    },
    phone: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
});

//this will run before saving the user
userSchema.pre('save', async function(next){
    const user = this;

    if(!user.isModified('password')){
        return next();
    }

    try {
        const saltRound = await bcrypt.genSalt(10);
        const hash_password = await bcrypt.hash(user.password, saltRound);
        user.password = hash_password;

    } catch (error) {
        console.error('Error hashing password:', error);
        return next(error);
    }
});

//authenticate user by password
userSchema.methods.authenticateUser = async function(password) {
    try {
        return await bcrypt.compare(password, this.password);
        
    } catch (error) {
        console.error('Error authenticating user:', error);
        throw new Error('Authentication failed');
    }
}

//json web token
userSchema.methods.generateToken = async function() {
    try {
        return jwt.sign({
            userId: this._id.toString(),
            email: this.email,
            isAdmin: this.isAdmin
        },
        process.env.JWT_SECRET, {
            expiresIn: "30d",
        }
    )
    } catch (error) {
        console.error('Error generating token:', error);
    }
}

const User = mongoose.model('User', userSchema);

export default User;