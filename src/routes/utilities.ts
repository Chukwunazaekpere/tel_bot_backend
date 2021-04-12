import express, { Router } from 'express';
const utilRoutes: Router = express.Router();

import controllers from '../controllers';

utilRoutes.use('/team', controllers.teamController);
utilRoutes.use('/support', controllers.supportController);

export default utilRoutes;