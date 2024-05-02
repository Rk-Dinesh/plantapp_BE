const CustomerService = require('../Services/Customerservice');


exports.registerUser = async (req, res, next) => {
    try {
        const { fname, lname, phone, time, email, password } = req.body;
        
        // Check if req.file exists and if img property is present
        if (!req.file || !req.file.filename) {
            return res.status(400).json({ status: false, message: "No file uploaded" });
        }

        const user = await CustomerService.createUser(fname, lname, phone, time, req.file.filename, email, password);
        res.status(201).json({ status: true, message: "User registered successfully", data: user });
    } catch (error) {
        next(error);
    }
};

exports.updateUser = async (req, res, next) => {
    try {
        const { email,fname,lname,phone } = req.body; 
        const updatedUser = await CustomerService.updateUser(email, fname,lname,phone);
        if (!updatedUser) {
            return res.status(404).json({ status: false, message: "User not found" });
        }
        res.status(200).json({ status: true, message: "User updated successfully", data: updatedUser });
    } catch (error) {
        next(error);
    }
};
exports.updateImgUser = async (req, res, next) => {
    try {
        const { email, img } = req.body; 
        if (!req.files || !req.files.img) {
            return res.status(400).json({ status: false, message: "No image uploaded" });
        }

        const updatedUser = await CustomerService.updateUser(email, img);

        if (!updatedUser) {
            return res.status(404).json({ status: false, message: "User not found" });
        }

        res.status(200).json({ status: true, message: "User updated successfully", data: updatedUser });
    } catch (error) {
        next(error);
    }
};


exports.deleteUser = async (req, res, next) => {
    try {
        const { email } = req.query; // Assuming email is passed as a parameter
        const deletedData = await CustomerService.deleteUser(email);
        res.status(200).json({ status: true, message: "User deleted successfully", data: deletedData });
    } catch (error) {
        next(error);
    }
};
exports.getAllUsers = async (req, res, next) => {
    try {
        const users = await CustomerService.getAllUsers();
        res.status(200).json({ status: true, message: "All users retrieved successfully", data: users });
    } catch (error) {
        next(error);
    }
};
exports.getUserByEmail = async (req, res, next) => {
    try {
        const {email} = req.query;
        const user = await CustomerService.getUserByEmail(email);
        res.status(200).json({ status: true, message: "User retrieved successfully", data: user });
    } catch (error) {
        next(error);
    }
};