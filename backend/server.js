const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const pool = require("./config/db");
const healthRoute = require("./routes/health");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/health", healthRoute);

app.get("/", (req, res) => {
    res.send("IB OS Backend is running...");
});
app.get("/health-test", (req, res) => {
    res.json({
        success: true,
        message: "Direct health test is working"
    });
});

app.get("/test", async (req, res) => {
    try {
        const result = await pool.query("SELECT NOW()");
        res.json({
            success: true,
            time: result.rows[0],
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            error: err.message,
        });
    }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});