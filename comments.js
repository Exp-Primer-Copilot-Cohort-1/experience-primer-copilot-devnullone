// Create web server

// Import modules
const express = require('express');
const router = express.Router();
const commentsController = require('../controllers/commentsController');


// Handle requests
router.get('/', commentsController.getAllComments);
router.get('/:id', commentsController.getCommentById);
router.post('/', commentsController.createComment);
router.put('/:id', commentsController.updateComment);
router.delete('/:id', commentsController.deleteComment);
