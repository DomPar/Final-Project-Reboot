const router = require('express').Router()
const {checkAuth} = require ('../utils/middlewares.js')
const {
    createPet,
    getAllPets,
    getOnePet,
    updatePet,
    deletePet,
    getAllPetsByShelter,
    createPetWithShelter
} = require ('../controllers/pet.controller')

router.post('/', createPet)

router.post('/createpetwithshelter', checkAuth, createPetWithShelter)

router.get('/', getAllPets)

router.get('/shelter/:shelterId', getAllPetsByShelter)

router.get('/:id', checkAuth, getOnePet)

router.put('/:id', updatePet)

router.delete('/:id', deletePet)

module.exports = router