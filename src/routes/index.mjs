import express from 'express';

import memberRoutes from './member.route';

import projectRoutes from './project.route';



const router = express.Router();

router.get('/api-status', (req, res) => res.json({ status:'API IS OK'}));
router.use(memberRoutes);
router.use(projectRoutes);

export default router;   