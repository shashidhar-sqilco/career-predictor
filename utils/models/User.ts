import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please provide your name"],
        unique: true,
        in: 6,
        max:20
    },
    email: {
        type: String,
        required: [true, "Please provide email"],
        unique: true,
    },
    password: {
        type: String,
        required: [true, "Please provide a password"],
        min:6
    },
    phone: {
        type: Number,
        required: [true, "Please provide a phone number"],
    },
  
    isAdmin: {
        type: Boolean,
        default: false,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    expiredAt: {
        type: Date,
        default: null,
    },

});

const User = mongoose.models.User || mongoose.model("User", UserSchema);

export default User;
