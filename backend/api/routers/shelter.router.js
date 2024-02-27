const router = require('express').Router()

const { 
    createShelter,
    getAllShelters,
    getOneShelter,
    updateShelter,
    deleteShelter,
} = require ('../controllers/shelter.controller')

router.post('/', createShelter)

router.get('/', getAllShelters)

router.get('/:id', getOneShelter)

router.put('/:id', updateShelter)

router.delete('/:id', deleteShelter)


module.exports = router