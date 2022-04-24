import express from 'express';
import { getAllResume, getMyResume, getResumeById, postResume, updateResume, deleteResumeById} from '../controllers/resume.js';
import auth from '../middleware/auth.js';

const router = express.Router();

router.get('/', auth, getMyResume);
router.get('/all', auth, getAllResume);
router.get('/:id', auth, getResumeById);

router.post('/', auth, postResume);
router.patch('/', auth, updateResume);

router.delete('/:id', auth, deleteResumeById);


export default router;