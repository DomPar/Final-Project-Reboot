const { Pet } = require ('../models/pet.model')


const createPet = async (req, res) => {

    try {
        const pet = await Pet.create(req.body)  
        res.status(200).json({
            message: 'Pet created',
            result: pet
        })      
    } catch (error) {
       res.status(500).json({
        message: 'Error creating Pet',
        result: error 
        })
    }
}

const getAllPets = async (req, res) => {
    try {
        const pets = await Pet.findAll()
        res.status(200).json({
            message: 'Here are the Pets',
            result: pets
        }) 
    } catch (error) {
        res.status(500).json({
            message: 'Error getting Pets',
            result: error 
            })
    }
}

const getAllPetsByShelter = async (req, res) => {
    try {
       
        const pets = await Pet.findAll({
            where: req.params.id
          })
        res.status(200).json({
            message: 'Here are the Pets',
            result: pets
        }) 
    } catch (error) {
        res.status(500).json({
            message: 'Error getting Pets',
            result: error 
            })
    }
}

const getOnePet = async (req, res) => {
    try {
        const pet = await Pet.findByPk(req.params.id)
        res.status(200).json({
            message: 'Here is the Pet',
            result: pet
        }) 
    } catch (error) {
        res.status(500).json({
            message: 'Error getting one Pet',
            result: error 
            })
    }
}

const updatePet = async (req, res) => {
    try {
        const [pet] = await Pet.update(req.body, {
            where: {
                id: req.params.id
            }
        })
        if(!pet) {
            return res.status(404).send('Pet not found')
        } else {
        res.status(200).json({
            message: 'Pet updated succesfully',
            result: req.body
        }) 
    }
    } catch (error) {
        res.status(500).json({
            message: 'Error updating Pet',
            result: error 
            })
    }
}

const deletePet = async (req, res) => {
    try {
        const pet = await Pet.destroy({
            where: {
                id: req.params.id
            }
        })
        if(!pet) {
            return res.status(404).send('Pet not found')
        } else {
        res.status(200).json({
            message: 'Pet deleted succesfully',
            result: pet
        }) 
    }

    } catch (error) {
        res.status(500).json({
            message: 'Error updating Post',
            result: error 
            })
    }
}

module.exports = {
    createPet,
    getAllPets,
    getOnePet,
    updatePet,
    deletePet,
    getAllPetsByShelter
}