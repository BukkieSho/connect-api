import { Router } from 'express'
const router = Router()

import * as puppiesCtrl from '../controllers/puppies.js'

// GET	/api/puppies	Retrieve ALL puppies
router.get('/puppies', puppiesCtrl.index)

// GET	/api/puppies/:id	Retrieve a SINGLE puppy
router.get('/puppies/:id', puppiesCtrl.show)

// POST	/api/puppies	Add a puppy
router.post('/puppies', puppiesCtrl.create)

// PUT	/api/puppies/:id	Update a puppy
router.put('/puppies/:id', puppiesCtrl.update)

// DELETE	/api/puppies/:id	Delete a puppy
router.delete('/puppies/:id', puppiesCtrl.delete)

export {
  router
}
