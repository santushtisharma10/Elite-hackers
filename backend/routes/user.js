import express from 'express';

import { otherSignup, signin, signup, forgetPassword } from '../controllers/user.js';

const router = express.Router();
router.post('/signin', signin);
router.post('/signup', signup);
router.post('/othersignup', otherSignup);
router.post('/forgetPassword', forgetPassword);

export default router;