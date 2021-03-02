import { Router } from 'express';

import { userController } from './controllers/useCases';

const router = Router();

// Rota para criação de usuário
router.post('/user', userController.create);

export default router;