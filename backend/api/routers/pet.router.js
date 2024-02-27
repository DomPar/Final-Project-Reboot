const router = require('express').Router()

const {
    createPet,
    getAllPets,
    getOnePet,
    updatePet,
    deletePet
} = require ('../controllers/pet.controller')

router.post('/', createPet)

router.get('/', getAllPets)

router.get('/:id', getOnePet)

router.put('/:id', updatePet)

router.delete('/:id', deletePet)

module.exports = router