import mongoose from "mongoose";

const userScema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
});

const user = mongoose.model('seleksi_2', userScema);
export default user;