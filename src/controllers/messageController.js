const Message = require('../models/messageModel');

const createMessage = async (request, response) => {
    const title = request.body.title;
    const description = request.body.description;

    if (!title || ! description) {
        return response.status(400).
        json({message: "Veuillez renseigner une description et un titre"})
    }
    try {
        const newMessage = new Message({title, description});
        await newMessage.save();
        response.status(201).json({message: "Message créé"})
    }
    catch (err) {
        response.status(500).json({message: "Erreur lors de la création de votre message"})
    }
}

const getAllMessages = async (request, response) => {
    try {
        const messages = await Message.find();
        response.status(200).json({message: "Messages trouvés", result: messages})
    }
    catch (err) {
        response.status(500).json({message: "Aucun message trouvé"})
    }
}

const viewOneMessageById = async (request, response) => {
    const id = request.params.id;

    try{
        const message = await Message.findById(id)
        if (!message) {
            return response.status(404).json({message: "Aucun message ne correspond à cet id"})
        }
        response.status(200).json({message: "Message trouvé", result: message})
    }
    catch (err) {
        response.status(500).json({message: "Erreur lors de la recherche d'un message"})
    }
}

module.exports = {
    createMessage,
    getAllMessages,
    viewOneMessageById
}