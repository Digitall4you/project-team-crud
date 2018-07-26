import express from 'express';

import memberRoutes from './member.route';

import projectRoutes from './project.route';

const router = express.Router();

router.get('/api-status', (req, res) => res.json({ status:'Test API'}));
router.use('/member',memberRoutes);
router.use('/project',projectRoutes);

export default router;   