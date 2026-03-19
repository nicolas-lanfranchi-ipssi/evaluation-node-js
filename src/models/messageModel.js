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
        type: String,
        enum: ["publique", "unique"],
        default: "publique"
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    read: {
        type: Boolean,
        default: false
    }
});

const Message = mongoose.model('Message', messageSchema);
module.exports = Message;