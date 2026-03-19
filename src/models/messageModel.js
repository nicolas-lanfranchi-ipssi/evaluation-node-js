const { Schema, default: mongoose } = require('mongoose');

const messageSchema = new Schema ({
    title: {
        type: String,
        require: true
    },
    content: {
        type: String,
        require: true
    },
    type: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Message = mongoose.model('Message', messageSchema);
module.exports = Message;