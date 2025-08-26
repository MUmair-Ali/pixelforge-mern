import User from '../models/user.model.js';
import Contact from '../models/contact.model.js';
import Service from '../models/service.model.js';


const getUsers = async (req, res) => {

    try {

        const users = await User.find({}, {password:0});
        
        if(!users) {
           return res.status(404).json({message: 'Users Not Found'});
        }
        console.log(users);
        return res.status(200).json(users);
    } catch (error) {
        next(error)
    }
}

const deleteUser = async (req, res) => {

    try {
        const id = req.params.id;
        await User.deleteOne({_id: id});
        res.status(200).json({message:'User Deleted Successfully!'})
    } catch (error) {
        next(error);
    }
}

const getUserById = async (req, res) => {

    try {
        const id = req.params.id;
        const user = await User.findOne({_id: id}, {password:0});
        res.status(200).json(user);
    } catch (error) {
        next(error);
    }
}

const updateUser = async (req, res) => {

    try {

        const id = req.params.id;
        const updatedData = req.body;

        const updatedUser = await User.updateOne({_id:id}, {
            $set: updatedData,
        })
        console.log("update success");
        return res.status(200).json(updatedUser);


    } catch (error){
        next(error);
    }
}



const getUserCounts = async (req, res) => {
    try {
        const count = await User.countDocuments()

        if(!count) {
            res.status(404).json({message:'No Users Yet'});
        }

        return res.status(200).json({totalUsers: count});
    } catch(error) {
        next(error);
    }
}

const getContacts = async (req, res) => {

    try {

        const contacts = await Contact.find();

        if(!contacts) {
            return res.status(404).json({message: 'Contacts Not Found'});
        }

        return res.status(200).json({contacts});

    } catch(error) {
        next(error);
    }
}

const getContactCounts = async (req, res) => {
    try {
        const count = await Contact.countDocuments()

        if(!count) {
            res.status(404).json({message:'No Contacts Yet'});
        }

        return res.status(200).json({totalContacts: count});
    } catch(error) {
        next(error);
    }
}

const updateContact = async (req, res) => {

    try {

        const id = req.params.id;
        const updatedData = req.body;

        const updatedContact = await Contact.updateOne({_id:id}, {
            $set: updatedData,
        })
        console.log("update success");
        return res.status(200).json(updatedContact);


    } catch (error){
        next(error);
    }
}


const deleteContact = async (req, res) => {

    try {
        const id = req.params.id;
        await Contact.deleteOne({_id: id});
        res.status(200).json({message:'Contact Deleted Successfully!'})
    } catch (error) {
        next(error);
    }
}

const getServiceCounts = async (req, res) => {

    try {

        const count = await Service.countDocuments();

        if(!count) {
            return res.status(404).json({message: 'No Services Yet'});
        }

        return res.status(200).json({totalServices: count})

    } catch (error) {
        next(error);
    }
}

const updateService = async (req, res) => {

    try {

        const id = req.params.id;
        const updatedData = req.body;

        const updatedService = await Service.updateOne({_id:id}, {
            $set: updatedData,
        })
        console.log("update success");
        return res.status(200).json(updatedService);


    } catch (error){
        next(error);
    }
}

const deleteService = async (req, res) => {

    try {
        const id = req.params.id;
        await Service.deleteOne({_id: id});
        res.status(200).json({message:'Service Deleted Successfully!'})
    } catch (error) {
        next(error);
    }
}

export default {
    getUsers,
     getUserById,
     updateUser,
      deleteUser,
       getUserCounts,
        getContactCounts,
         getContacts,
         updateContact,
          deleteContact,
           getServiceCounts,
           updateService,
           deleteService
        };