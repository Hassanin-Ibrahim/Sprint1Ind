var express = require('express'),
  router = express.Router(),
//  productCtrl = require('../controllers/ProductController');
  HassneanproductCtrl = require('../controllers/HassneanProductController');

  const authentication = require('../controllers/authentication')(router);
  app = express();
	memberCtrl = require('../controllers/MemberController');


//-------------------------------Product Routes-----------------------------------
// router.get('/product/getProducts', productCtrl.getProducts);
// router.get('/product/getProduct/:productId', productCtrl.getProduct);
// router.get(
//   '/product/getProductsBelowPrice/:price',
//   productCtrl.getProductsBelowPrice
// );
// router.post('/product/createProduct', productCtrl.createProduct);
// router.patch('/product/updateProduct/:productId', productCtrl.updateProduct);
// router.delete('/product/deleteProduct/:productId', productCtrl.deleteProduct);


app.use('/authentication' , authentication);
//------------------------------Hassnean Product----------------------------------
router.get('/Hassneanproduct/getProducts', HassneanproductCtrl.getProducts);
router.get('/Hassneanproduct/getProduct/:productId', HassneanproductCtrl.getProduct);
router.get('/Hassneanproduct/getProductsBelowPrice/:price', HassneanproductCtrl.getProductsBelowPrice);
router.post('/Hassneanproduct/createProduct', HassneanproductCtrl.createProduct);
router.patch('/Hassneanproduct/updateProduct/:productId', HassneanproductCtrl.updateProduct);
router.delete('/Hassneanproduct/deleteProduct/:productId', HassneanproductCtrl.deleteProduct);


//-------------------------------Member Routes-----------------------------------
router.get('/member/getMembers', memberCtrl.getMembers);
router.post('/member/createMember', memberCtrl.createMember);
router.patch('/member/updateMember/:memberId', memberCtrl.updateMember);
router.delete('/member/deleteMember/:memberId', memberCtrl.deleteMember);

module.exports = router;
