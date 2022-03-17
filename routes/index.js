const authRoutes = require("./auth.routes");
const medicineRoutes = require("./medicine.routes");

const router = require("express").Router();
router.use("/auth", authRoutes);
router.use("/medicine", medicineRoutes);
module.exports = router;
