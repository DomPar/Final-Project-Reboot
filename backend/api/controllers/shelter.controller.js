const {Shelter} = require ('../models/shelter.model')
const bcrypt = require ('bcrypt')

const createShelter = async (req, res) => {

    try {
        const shelter = await Shelter.create(req.body)  
        res.status(200).json({
            message: 'Shelter created',
            result: shelter
        })      
    } catch (error) {
       res.status(500).json({
        message: 'Error creating Shelter',
        result: error 
        })
    }
}

const getAllShelters = async (req, res) => {
    try {
        const shelters = await Shelter.findAll()
        res.status(200).json({
            message: 'Here are the Shelters',
            result: shelters
        }) 
    } catch (error) {
        res.status(500).json({
            message: 'Error getting Shelters',
            result: error 
            })
    }
}

const getOneShelter = async (req, res) => {
    try {
        const shelters = await Shelter.findByPk(req.params.id)
        res.status(200).json({
            message: 'Here is the Shelter',
            result: shelters
        }) 
    } catch (error) {
        res.status(500).json({
            message: 'Error getting one Shelter',
            result: error 
            })
    }
}

const getOwnShelter = async (req, res) => {
    try {
        const shelters = await Shelter.findByPk(res.locals.shelter.id)
        res.status(200).json({
            message: 'Here is the Shelter',
            result: shelters
        }) 
    } catch (error) {
        res.status(500).json({
            message: 'Error getting own Shelter',
            result: error 
            })
    }
}

const updateShelter = async (req, res) => {
    try {
        const [shelter] = await Shelter.update(req.body, {
            where: {
                id: req.params.id
            }
        })
        if(!shelter) {
            return res.status(404).send('Shelter not found')
        } else {
        res.status(200).json({
            message: 'Shelter updated succesfully',
            result: req.body
        }) 
    }
    } catch (error) {
        res.status(500).json({
            message: 'Error updating Shelter',
            result: error 
            })
    }
}

const updateShelterDescription = async (req, res) => {
    try {
        const [shelter] = await Shelter.update(req.body, {
            where: {
                id: res.locals.shelter.id
            }
        })
        if(!shelter) {
            return res.status(404).send('Shelter not found')
        } else {
        res.status(200).json({
            message: 'Shelter updated succesfully',
            result: req.body
        }) 
    }
    } catch (error) {
        res.status(500).json({
            message: 'Error updating Shelter',
            result: error 
            })
    }
}

const updateShelterAvatar = async (req, res) => {
    try {
        const [shelter] = await Shelter.update(req.body, {
            where: {
                id: res.locals.shelter.id
            }
        })
        if(!shelter) {
            return res.status(404).send('Shelter not found')
        } else {
        res.status(200).json({
            message: 'Shelter updated succesfully',
            result: req.body
        }) 
    }
    } catch (error) {
        res.status(500).json({
            message: 'Error updating Shelter',
            result: error 
            })
    }
}

const deleteShelter = async (req, res) => {
    try {
        const shelter = await Shelter.destroy({
            where: {
                id: req.params.id
            }
        })
        if(!shelter) {
            return res.status(404).send('Shelter not found')
        } else {
        res.status(200).json({
            message: 'Shelter deleted succesfully',
            result: shelter
        }) 
    }

    } catch (error) {
        res.status(500).json({
            message: 'Error updating Shelter',
            result: error 
            })
    }
}

module.exports = {
    createShelter,
    getAllShelters,
    getOneShelter,
    updateShelter,
    deleteShelter,
    getOwnShelter,
    updateShelterDescription,
    updateShelterAvatar
}
