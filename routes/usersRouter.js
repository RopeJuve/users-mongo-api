import express from 'express';
import { createUser, deleteUser, getUser, getUsers, updateUser } from '../controllers/userControllers.js';
import { checkId, checkUser, modifyBody } from '../middleware/usersMiddleware.js';
const usersRouter = express.Router();

usersRouter.get('/', getUsers);
usersRouter.post('/', modifyBody, createUser);
usersRouter.get('/:id', checkId, checkUser, getUser);
usersRouter.put('/:id', checkId, checkUser, updateUser);
usersRouter.delete('/:id', checkId, checkUser, deleteUser);

export default usersRouter;