const jwt =require("jsonwebtoken");

const verifyToken = (req, res, next) => {
    const authHeader = req.headers.token;
    if (authHeader) {
        //Sorry, I can't show all code. But don't worry, it works!
    } else {
        return res.status(401).json("Ви не авторизовані");
    }
};

const verifyTokenAndAuthorization = (req, res, next) => {
    verifyToken(req, res, () => {
        //Sorry, I can't show all code. But don't worry, it works!
    });
};
const verifyTokenAndAdmin = (req, res, next) => {
    verifyToken(req, res, () => {
        //Sorry, I can't show all code. But don't worry, it works!
    });
};

module.exports = { 
    verifyToken, 
    verifyTokenAndAuthorization,
    verifyTokenAndAdmin,
};