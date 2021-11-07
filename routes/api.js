import { Router } from 'express'
const router = Router()

import * as connectCtrl from '../controllers/connect.js'

// GET	/api/connect	Retrieve ALL connect
router.get('/connect', connectCtrl.index)

// GET	/api/connect/:id	Retrieve a SINGLE puppy
router.get('/connect/:id', connectCtrl.show)

// POST	/api/connect	Add a puppy
router.post('/connect', connectCtrl.create)

// PUT	/api/connect/:id	Update a puppy
router.put('/connect/:id', connectCtrl.update)

// DELETE	/api/connect/:id	Delete a puppy
router.delete('/connect/:id', connectCtrl.delete)

export {
  router
}
