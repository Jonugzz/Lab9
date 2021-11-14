const { render } = require('ejs');
const express = require('express');
const router = express.Router();
const Blog = require('../model/blogpost');


router.get('/', async function(req,res){

  var bp = await Blog.find();
  res.render('index', {bp});
});


router.get('/newPost', async (req,res) =>{
  res.render('newPost');
});

router.post('/add', async(req,res) => {
  var bp = new Blog(req.body);
  await bp.save();
  res.redirect('/');
});

router.get('/delete/:id', async (req, res) => {
  var id = req.params.id;
  var ubp = await Blog.findById(id);
  res.render('delete', {ubp});
});

router.post('/delete/:id', async (req, res) => {
  var id = req.params.id;
  await Blog.deleteOne({_id : id}, req.body);
  res.redirect('/');
});

router.get('/edit/:id', async (req, res) => {
  var id = req.params.id;
  var ubp = await Blog.findById(id);
  res.render('edit', {ubp});
});

router.post('/edit/:id', async (req, res) => {
  var id = req.params.id;
  await Blog.updateOne({_id : id}, req.body);
  res.redirect('/');
});



module.exports = router;