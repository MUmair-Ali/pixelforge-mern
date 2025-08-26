import Contact from "../models/contact.model.js";

const contactForm = async (req, res) => {
    try {
        const response = req.body;
        await Contact.create(response);
        res.status(201).json({ message: "Message sent successfully" });
    } catch (error) {
        const err = {
            status: 500,
            message: "Internal Server Error",
            details: error.message
        }
        next(err);
    }
}

export default {contactForm};