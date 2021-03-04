import { Router } from 'express';

import { userController } from './controllers/useCases/userUseCases';

const router = Router();

// Rota para criação de usuário
router.post('/user', (request, response) => {
  return userController.create(request, response);
});

// Rota para deletar um usuário
router.post('/delete-user', (request, response) => {
  return userController.delete(request, response);
});

// Rota para atualizar um usuário
router.patch('/user/:id', (request, response) => {
  return userController.execute(request, response);
});

// Rota para mostrar um usuário
router.get('/user:id', (request, response) => {
  return userController.index(request, response);
});

// Rota para criação de usuário
router.get('/user', (request, response) => {
  return userController.show(request, response);
});

export default router;