import { Schema, model } from 'mongoose';

import { hash, compare } from 'bcryptjs';

import { sign } from 'jsonwebtoken';

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


});

// encrypt password before saving

userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        next();
    }

    this.password = await hash(this.password, 10);
}

);

// Compare user password for login and logout

userSchema.methods.comparePassword = async function (enteredPassword) {
    return await compare(enteredPassword, this.password);
}


// jwt token genreation

userSchema.methods.getJwtToken = function () {
    return sign({ id: this._id }, process.env.JWT_SECRET,);
}

//  
export default model('User', userSchema);




