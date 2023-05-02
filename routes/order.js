const Order = require("../models/Order");
const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require("./verifyToken");
const router = require("express").Router();

// create
router.post("/", verifyToken, async (req, res) => {
    const newOrder = new Order(req.body);
    //Sorry, I can't show all code. But don't worry, it works!
})

// update
router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
   //Sorry, I can't show all code. But don't worry, it works!

});

// delete
router.delete("/:id", verifyTokenAndAdmin, async (req, res)=> {
    //Sorry, I can't show all code. But don't worry, it works!
});

// get all orders
router.get("/", verifyTokenAndAdmin, async (req, res) => {
    try {
       //Sorry, I can't show all code. But don't worry, it works!
    }catch(err) {
        res.status(500).json(err);
    }
})

// get user orders
router.get("/find/:userId", verifyTokenAndAuthorization, async (req, res)=> {
    try{
       //Sorry, I can't show all code. But don't worry, it works!
    }catch(err) {
        res.status(500).json(err)
    };
});

// get monthly income
router.get("/income", verifyTokenAndAdmin, async (req, res) => {
    const productId = req.query.pid;
    const date = new Date();
    const lastMonth = new Date(date.setMonth(date.getMonth() -1));
    const previosMonth = new Date(new Date().setMonth(lastMonth.getMonth() -1));
    try{
       //Sorry, I can't show all code. But don't worry, it works!
        ]);
        res.status(200).json(income);
    }catch(err) {
        res.status(500).json(err);
    }
})

module.exports = router;