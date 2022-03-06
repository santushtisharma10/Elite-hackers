import express from 'express';

import { otherSignup, signin, signup } from '../controllers/user.js';

const router = express.Router();
router.post('/signin', signin);
router.post('/signup', signup);
router.post('/othersignup', otherSignup);

export default router;