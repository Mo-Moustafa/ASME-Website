const express = require('express');

const {
    adminLoginValidator,
} = require('../utils/validators/adminValidator');

const {
    adminLogin,
    forgetPassword,
    verifyPassResetCode,
    resetPassword,
} = require('../controllers/authController');

const router = express.Router();

router.post('/adminLogin', adminLoginValidator, adminLogin);
router.post('/forgetPassword', forgetPassword);
router.post('/verifyResetCode', verifyPassResetCode);
router.put('/resetPassword', resetPassword);

module.exports = router;