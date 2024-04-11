import express from 'express'
import { register, signup } from '../../controller/LOgController.js'

const router =express.Router()

router.post('/reg',register)
router.post('/sign',signup)

export default router