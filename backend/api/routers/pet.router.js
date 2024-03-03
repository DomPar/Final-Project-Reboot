const router = require('express').Router()

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

router.post('/createpetbyshelter', createPetWithShelter)

router.get('/', getAllPets)

router.get('/shelter/:shelterId', getAllPetsByShelter)

router.get('/:id', getOnePet)

router.put('/:id', updatePet)

router.delete('/:id', deletePet)

module.exports = router