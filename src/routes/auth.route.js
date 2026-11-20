const { Router } = require("express");
const router = Router();
const { crate,login } = require("../controllers/auth.controller")

// POST /api/create/create
router.post("/create",crate);
router.post("/login",login);

module.exports = router;
