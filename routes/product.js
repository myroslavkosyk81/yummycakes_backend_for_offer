const Product = require("../models/Product");
const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require("./verifyToken");
const router = require("express").Router();

// create
router.post("/", verifyTokenAndAdmin, async (req, res) => {
    const newProduct = new Product(req.body);
    try {
       //Sorry, I can't show all code. But don't worry, it works!
    }catch (err) {
        res.status(500).json(err);
    }
})

//update
router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
    try{
        //Sorry, I can't show all code. But don't worry, it works!
    }catch (err) {
        res.status(500).json(err);
    }

});

// delete
router.delete("/:id", verifyTokenAndAdmin, async (req, res)=> {
    //Sorry, I can't show all code. But don't worry, it works!
});

// get all products
router.get("/", async (req, res)=> {
    const qNew = req.query.new;
    const qCategory = req.query.category;
    //Sorry, I can't show all code. But don't worry, it works!
    }catch(err) {
        res.status(500).json(err)
    };
});

// get product
router.get("/find/:id", async (req, res)=> {
    try{
       //Sorry, I can't show all code. But don't worry, it works!
    }catch(err) {
        res.status(500).json(err)
    };
});

module.exports = router;