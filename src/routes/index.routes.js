const { Router } = require('express');
const ctrl =require('../controllers/home')

const router = Router();

router.get('/',ctrl.homeController)
      .get('/upload',ctrl.showImage)
      .get('/image/:id',ctrl.getOneImage)
      .post('/upload',ctrl.uploadImage)
      .get('/image/:id/delete',ctrl.deleteImage)


module.exports = router;



