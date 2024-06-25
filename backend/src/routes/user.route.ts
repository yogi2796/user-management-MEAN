import { Router } from 'express';
import { getUserProfile, updateUserProfile, listUsers, getUserLoginHistory, deleteUserProfile } from '../controllers/user.controller';
import { authenticateJWT } from '../middlewares/auth.middleware';

const router = Router();

router.get('/profile', authenticateJWT, getUserProfile);
router.put('/profile/:id', authenticateJWT, updateUserProfile);
router.delete('/profile/:id', authenticateJWT, deleteUserProfile);
router.get('/list', authenticateJWT, listUsers);
router.get('/history', authenticateJWT, getUserLoginHistory);

export default router;
