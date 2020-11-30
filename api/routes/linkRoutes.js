const router = require('express').Router();
let Links = require('../models/links.model');

router.post("/", async (req, res) => {
    try {
        let { links, adminId } = req.body;

        if (!links || !adminId)
            return res.status(400).json({ msg: "Not all fields have been entered." });

        const newLink = new Links({
            links,
            adminId: adminId
        });
        const savedLink = await newLink.save();
        res.json(savedLink);

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.get("/all", async (req, res) => {
    const {  currAdmin } = req.body;
    const allLinks = await Links.find({adminId: req.query.currAdmin });
    
    res.json(allLinks);
});

module.exports = router;