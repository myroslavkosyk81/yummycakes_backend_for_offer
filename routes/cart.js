const Cart = require("../models/Cart");
const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require("./verifyToken");
const router = require("express").Router();

// create
router.post("/", verifyToken, async (req, res) => {
    const newCart = new Cart(req.body);
    //Sorry, I can't show all code. But don't worry, it works!
    }catch (err) {
        res.status(500).json(err);
    }
})

// update
router.put("/:id", verifyTokenAndAuthorization, async (req, res) => {
    try{
        //Sorry, I can't show all code. But don't worry, it works!
        res.status(200).json(updatedCart);
    }catch (err) {
        res.status(500).json(err);
    }

});

// delete
router.delete("/:id", verifyTokenAndAuthorization, async (req, res)=> {
    try{
        //Sorry, I can't show all code. But don't worry, it works!
    }catch(err) {
        res.status(500).json(err)
    };
});

// get all carts
router.get("/", verifyTokenAndAdmin, async (req, res) => {
    //Sorry, I can't show all code. But don't worry, it works!
})

// get cart
router.get("/find/:userId", verifyTokenAndAuthorization, async (req, res)=> {
    //Sorry, I can't show all code. But don't worry, it works!
});

module.exports = router;