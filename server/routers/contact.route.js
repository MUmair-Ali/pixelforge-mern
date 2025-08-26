import express from 'express';
import contactController from '../controllers/contact.controller.js';
import { validate } from '../middlewares/validate.middleware.js';
import { contactSchema } from '../validators/contact.validator.js';

const router = express.Router();

router.route('/contact').post(validate(contactSchema), contactController.contactForm);

export { router };