
const router = require("express").Router();
var admin = require("../controllers/admin");

router.get("/", admin.home);
router.get("/setup_admin", admin.setup_admin);
router.get("/setup_customer", admin.setup_customer);

module.exports = router;