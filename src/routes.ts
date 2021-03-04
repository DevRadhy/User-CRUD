import { Router } from 'express';

import { userController } from './controllers/useCases';

const router = Router();

// Rota para criação de usuário
router.post('/user', (request, response) => {
  return userController.create(request, response);
});

export default router;