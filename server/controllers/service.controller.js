import Service from "../models/service.model.js";


const services = async (req, res) => {

    try {

        const servicesData = await Service.find();

        if(!servicesData){
            res.status(404).json({message: 'No Services Found'})
            return;
        }

        res.status(200).json({data: servicesData})


    } catch (error) {
        const err = {
            status: 500,
            message: 'Services not found',
            details: error.message
        }
        next(err);
    }
}

export default {services};