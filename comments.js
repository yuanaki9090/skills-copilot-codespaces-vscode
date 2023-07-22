// Create web server

const express = require('express');
const router = express.Router();

const commentController = require('../controllers/commentController');

router.get('/', commentController.getComments);
router.post('/', commentController.postComment);
router.put('/:id', commentController.putComment);
router.delete('/:id', commentController.deleteComment);

module.exports = router;