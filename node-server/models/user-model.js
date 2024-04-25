import { Schema, model } from 'mongoose';

import bcrypt from 'bcryptjs';

import jwt from 'jsonwebtoken';

const userSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Please enter your name'],
        trim: true,
        unique: true,
        maxLength: [30, 'Name cannot exceed 30 characters'],

        minLength: [3, 'Name must be at least 3 characters'],
    },

    password: {
        type: String,
        required: [true, 'Please enter your password'],
        minLength: [6, 'Password must be at least 6 characters'],
        select: false,
    },


}, { timestamps: true });

// encrypt password before saving

userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        next();
    }

    this.password = await bcrypt.hash(this.password, 10);
}

);

// Compare user password for login and logout

userSchema.methods.comparePassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
}


// jwt token genreation

userSchema.methods.getJwtToken = function () {
    return jwt.sign({ id: this._id }, process.env.JWT_SECRET,);
}

//  
export default model('User', userSchema);




