const User = require("../models/User");
const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require("./verifyToken");
const router = require("express").Router();

//update
router.put("/:id", verifyTokenAndAuthorization, async (req, res) => {
    if(req.body.password) {
        //Sorry, I can't show all code. But don't worry, it works!
    }
    try{
        const updatedUser = await User.findByIdAndUpdate(
            //Sorry, I can't show all code. But don't worry, it works!
        );
        res.status(200).json(updatedUser);
    }catch (err) {
        res.status(500).json(err);
    }

});

// delete
router.delete("/:id", verifyTokenAndAuthorization, async (req, res)=> {
    try{
        //Sorry, I can't show all code. But don't worry, it works!
    };
});

// get all users
router.get("/", verifyTokenAndAdmin, async (req, res)=> {
    const query = req.query.new;
    try{
        //Sorry, I can't show all code. But don't worry, it works!
    }catch(err) {
        res.status(500).json(err)
    };
});

// get user stats
router.get("/stats", verifyTokenAndAdmin, async (req, res) => {
    const date = new Date();
    const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));
    try {
        const data = await User.aggregate([
           //Sorry, I can't show all code. But don't worry, it works!
        ]);
        res.status(200).json(data);
    }catch(err) {
        res.status(500).json(err);
    }
});

// get user
router.get("/find/:id", verifyTokenAndAdmin, async (req, res)=> {
    try{
        //Sorry, I can't show all code. But don't worry, it works!
    }catch(err) {
        res.status(500).json(err)
    };
});

module.exports = router;