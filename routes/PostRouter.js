const express   = require('express');
const router    = express.Router();

const postController = require('../controllers/PostController');

router.get('/getPostById',postController.getPostByID);
router.put('/updatePost',postController.updatePost);