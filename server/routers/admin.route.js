import express from 'express';
import adminController from '../controllers/admin.controller.js';
import { authMiddleware } from '../middlewares/auth.middleware.js';
import { adminMiddleware } from '../middlewares/admin.middleware.js';

const router = express.Router();

router.route('/users').get(authMiddleware, adminMiddleware, adminController.getUsers);
router.route('/users/delete/:id').delete(authMiddleware, adminMiddleware, adminController.deleteUser);
router.route('/users/count').get(authMiddleware, adminMiddleware, adminController.getUserCounts);
router.route('/users/:id').get(authMiddleware, adminMiddleware, adminController.getUserById);
router.route('/users/edit/:id').patch(authMiddleware, adminMiddleware, adminController.updateUser);

router.route('/contacts').get(authMiddleware, adminMiddleware, adminController.getContacts);
router.route('/contacts/count').get(authMiddleware, adminMiddleware, adminController.getContactCounts);
router.route('/contacts/delete/:id').delete(authMiddleware, adminMiddleware, adminController.deleteContact);
router.route('/contacts/edit/:id').patch(authMiddleware, adminMiddleware, adminController.updateContact);

router.route('/services/count').get(authMiddleware, adminMiddleware, adminController.getServiceCounts);
router.route('/services/edit/:id').patch(authMiddleware, adminMiddleware, adminController.updateService);
router.route('/services/delete/:id').delete(authMiddleware, adminMiddleware, adminController.deleteService);

export {router};