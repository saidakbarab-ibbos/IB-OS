const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
    res.json({
        success: true,
        message: "IB OS API is running",
        version: "1.0.0"
    });
});

module.exports = router;