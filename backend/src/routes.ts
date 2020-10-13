import { Router } from 'express'
import multer from 'multer'

import uploadConfig from './config/upload'
import OrphanageController from './controllers/OrphanagesController'

const router = Router()
const upload = multer(uploadConfig)

router.post('/orphanages', upload.array('images'), OrphanageController.create)
router.get('/orphanages', OrphanageController.index)
router.get('/orphanages/:id', OrphanageController.show)

export default router
