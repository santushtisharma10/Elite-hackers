import express from 'express';
import { getJob, getJobs, postJob, updateJob, deleteJob } from '../controllers/jobs.js';
import auth from '../middleware/auth.js';

const router = express.Router();

router.get('/', auth, getJobs);
router.get('/:id', auth, getJob);

router.post('/', auth, postJob);
router.patch('/', auth, updateJob);

router.delete('/:id', auth, deleteJob);

export default router;