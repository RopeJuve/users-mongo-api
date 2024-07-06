import mongoose from "mongoose";
const { Schema, model } = mongoose;

const userSchema = new Schema({
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    email: { type: String, required: true, match: /.+\@.+\..+/ },
});


const User = model('User', userSchema);

export default User;