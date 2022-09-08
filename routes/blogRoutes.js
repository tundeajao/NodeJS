const express = require('express');
const Blog = require('../models/blog');
const router = express.Router();
const blogController = require('../controllers/blogController');

router.get('/', blogController.blog_index);
router.post('/', blogController.blog_create_post);
router.get('/create', blogController.blog_create_get);
router.get('/all-blogs', blogController.blog_all);
router.get('/single-blog', blogController.blog_single);

router.get('/:id', blogController.blog_details);
router.delete('/:id', blogController.blog_delete);

module.exports = router;