const router = require('express').Router()

const { 
    createShelter,
    getAllShelters,
    getOneShelter,
    updateShelter,
    deleteShelter,
    getOwnShelter,
    updateShelterDescription
} = require ('../controllers/shelter.controller')

const { checkAuth } = require ('../utils/middlewares.js')

router.post('/', createShelter)

router.get('/', getAllShelters)

router.get('/ownshelter/:id', checkAuth, getOwnShelter)

router.get('/:id', getOneShelter)

router.put('/:id',checkAuth, updateShelter)

router.patch('/:id',checkAuth, updateShelterDescription)

router.delete('/:id', deleteShelter)


module.exports = router