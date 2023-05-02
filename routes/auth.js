const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const jwt = require ("jsonwebtoken");

router.post("/register", async (req, res) => {
    const newUser = new User({
        //Sorry, I can't show all code. But don't worry, it works!
    });
    try {
        const savedUser = await newUser.save();
       //Sorry, I can't show all code. But don't worry, it works!
        }catch (err) {
        res.status(500).json(err)
    }
});
//login
router.post("/login", async (req, res) => {
    try{
        const user = await User.findOne({ username: req.body.username});
      //Sorry, I can't show all code. But don't worry, it works!
        }
        const hashedPassword = CryptoJS.AES.decrypt(
            //Sorry, I can't show all code. But don't worry, it works!

        if(originalPassword !== req.body.password) {
            return res.status(400).json("Невірні дані");
        };

        const accessToken = jwt.sign(
            //Sorry, I can't show all code. But don't worry, it works!
        );
        const { password, ...others} = user._doc;
        res.status(200).json({...others, accessToken});
    }catch (err) {
        res.status(500).json(err);
    }
    
   //Sorry, I can't show all code. But don't worry, it works!
}); 


module.exports = router;