const Image = require('../models/image');
const { unlink } = require('fs-extra');
const path = require('path');

let homeController = async (req, res) => {
  const image = await Image.find((err,data)=>{
    if(err){
      return res.status(400).json({
        ok:false,
        err
      })
    }else{
      res.render('index',{data});
    }
  })
};

let uploadImage = async (req, res) => {

  const image = new Image();
  image.title = req.body.title;
  image.description = req.body.description;
  image.filename = req.file.filename;
  image.path = '/img/upload/'+req.file.filename;
  image.originalname = req.file.originalname;
  image.mimetype = req.file.mimetype;
  image.size = req.file.size;

  await image.save((err,data)=>{
    if(err){
      return res.status(400).json({
        ok:false,
        err
      })
    }else{
       res.redirect('/');
    }
  })
};

let showImage = (req, res) => {
    res.render('upload');
};

let getOneImage = async (req, res) => {
  const id = req.params.id;
  const image = await Image.findById(id,(err,data)=>{
    
    if(err){
      return res.status(400).json({
        ok:false,
        err
      })
    }else{
      console.log(data);
      res.render('profile',{data});;
    }
  })
};
let deleteImage = async (req, res) => {
  const { id }= req.params;
  const image = await Image.findByIdAndDelete(id);
  await unlink(path.resolve('src/public'+image.path));
   res.redirect('/');
};
module.exports = {
  homeController,
  uploadImage,
  showImage,
  getOneImage,
  deleteImage
};
