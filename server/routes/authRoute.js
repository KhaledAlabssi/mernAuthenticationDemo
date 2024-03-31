import { Signup } from '../controllers/authController.js'
import express from 'express'
const router = express.Router()
router.route('/signup').post(Signup)


export default router