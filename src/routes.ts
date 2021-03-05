import { Router } from 'express';

import { userController } from './controllers/useCases/userUseCases';
import { addressController } from './controllers/useCases/addressUseCases';

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
router.get('/user/:id', (request, response) => {
  return userController.index(request, response);
});

// Rota para mostrar todos os usuário
router.get('/list-users', (request, response) => {
  return userController.show(request, response);
});

// Rota para criar um endereço
router.post('/address', (request, response) => {
  return addressController.create(request, response);
});

// Rota para atualizar um endereço
router.patch('/update-address/:id', (request, response) => {
  return addressController.execute(request, response);
});

// Rota para listar um endereço
router.get('/address/:id', (request, response) => {
  return addressController.index(request, response);
});

// Rota para listar todos os endereços
router.get('/addresses', (request, response) => {
  return addressController.show(request, response);
});

export default router;