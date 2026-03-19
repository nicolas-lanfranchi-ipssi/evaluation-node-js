const express = require('express')
const {createMessage, getAllMessages, viewOneMessageById} = require('../controllers/messageController');

const router = express.Router();

router.get('/', getAllMessages);
router.post('/', createMessage);
router.get('/:id', viewOneMessageById);

module.exports = router;