const router = require('express').Router();
let User = require('../models/users.model');
//const { default: Register } = require('../../webpageproject/src/Components/Register');

router.get("/test", (req, res) => {
    res.send("Hello!");
});

router.post('/Register', async (req, res) => {
    try {
        const {email, pass, passCheck, adminId } = req.body;
        //val
        if (!email || !pass || !passCheck || !adminId)
            return res.status(400).json({ msg: "Not all fields have been entered." });
        if (pass.length < 5)
            return res.status(400).json({ msg: "The password needs to be a minimum of 5 characters" });
        if (pass !== passCheck)
            return res.status(400).json({ msg: "Enter the same password twice" });

        const existingUser = await User.findOne({ email: email })
        if (existingUser)
            return res.status(400).json({ msg: "Account with this email already exists" });

        const newUser = new User({ email, pass, adminId});
        const savedUser = await newUser.save();
        res.json(savedUser);

    } catch (err) {
       res.status(500).json({error: err.message});

    }
});

router.post("/login", async (req, res) => {
    try {
        const { email, pass } = req.body;

        if (!email || !pass)
            return res.status(400).json({ msg: "Not all fields have been entered." });
        const user = await User.findOne({ email: email });
        if (!user)
            return res.status(400).json({ msg: "Not account with this email." });
        const isMatch = await User.findOne({ pass: pass });
        if (!isMatch) return res.status(400).json({ msg: "Invalid credentials." });

    } catch (err) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;