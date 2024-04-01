import { Signup, Login } from '../controllers/authController.js'
import express from 'express'
import { userVerification } from '../middlewares/authMiddleware.js'
const router = express.Router()
router.route('/').post(userVerification)
router.route('/signup').post(Signup)
router.route("/login").post(Login)



export default router