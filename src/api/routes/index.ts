import { Router } from 'express'
import ingredientsRouter from './ingredients'

const router = Router()

router.use('/users', ingredientsRouter);

export default router