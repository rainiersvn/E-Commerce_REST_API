const router = require("express").Router();
const paypal = require("@paypal/paypal-js")(process.env.PAYPAL_KEY);

router.post("/api/payment", (req, res) => {
    paypal.charges.create({
        source: req.body.tokenId,
        amount: req.body.amount,
        currency: "zar",
    }, (paypalErr, paypalRes) => {
        if(paypalErr){
            res.status(500).json(paypalErr);
        }else{
            res.status(200).json(paypalRes);
        }
    });
});

module.exports = router;