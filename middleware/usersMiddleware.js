import User from '../Model/userSchema.model.js';
import mongoose from 'mongoose';



// Middleware to modify req.body
export const modifyBody = (req, res, next) => {
    const { first_name, last_name, email } = req.body;
    if(first_name && last_name) {
        req.body.first_name = first_name.charAt(0).toUpperCase() + first_name.slice(1).toLowerCase();
        req.body.last_name = last_name.charAt(0).toUpperCase() + last_name.slice(1).toLowerCase();
    }

    if(email) {
        req.body.email = email.toLowerCase();
    }

    next();
}
// Middleware to check if id is valid
export const checkId = (req, res, next) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).send(`The id ${id} is not valid`);
      }
    req.id = id;
    next();
}

// Middleware to check if a user exists
export const checkUser = async(req, res, next) => {
    const { id } = req.params;
    try {
        const user = await User.findById(id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        req.user = user;
        next();
    } catch (error) {
        res.status(500).json({ message: error.message });
    }

}