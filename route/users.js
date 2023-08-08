import express from 'express';
const router = express.Router();
import { getUser, createUser, getUserById, deleteUser, updateUser } from '../controllers/users.js';

//get all users  
router.get('/', getUser);

// add user
router.post('/', createUser);

//to get user detail with id using params{id:234}
router.get('/:id', getUserById)

//delete a user
router.delete('/:id', deleteUser)

// update auser, for partially update use patch and to change every property use PUT
router.patch('/:id', updateUser)

export default router;