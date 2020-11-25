const router = require('express').Router();
let User = require('../models/users.model');


router.post('/').post((req, res) => {
    const email = req.body.email;
    const pass = req.body.password
    
    const newUser = new User({ email, pass});

    newUser.save()
        .then(() => res.json('User added!'))
        .catch(err => res.status(400).json('Error: ' + err));

});

router.post('/Register').post((req, res) => {
    const email = req.body.email;
    const pass = req.body.password
    const admin= req.body.adminID
    const newUser = new User({ email, pass, admin });
    
    newUser.save()
        .then(() => res.json('User added!'))
        .catch(err => res.status(400).json('Error: ' + err));

});