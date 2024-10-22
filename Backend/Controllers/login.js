import user from "../Models/user.js";

export const register = async(req, res) => {
    const { username, password, email } = req.body;

    try {
        const exitingUser = await user.findOne({ email });
        if (exitingUser) {
            return res.status(400).json({ message: "User sudah terdaftar" });
        }

        const newUser = new user({
            username,
            password, 
            email
        });

        await newUser.save();

        res.status(201).json({ message: "Registrasi sukses", User: newUser });
    } catch (error) {
        res.status(500).json({ message: "Error registrasi", error });
    }
}

export const login = async(req, res) => {
    const { email, password } = req.body;

    try {
        const User = await user.findOne({ email });

        if (!User) {
            return res.status(404).json({ message: "User tidak ditemukan" });
        }

        if (password !== User.password) {
            return res.status(404).json({ message: "Password salah" });
        }

        res.status(200).json({ message: "Login sukses", User });
    } catch (error) {
        res.status(500).json({ message: "Error", error });
    }
}

export const getAllUser = async(req, res) => {
    try {
        const users = await user.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: "error mengambil data", error });
    }
}