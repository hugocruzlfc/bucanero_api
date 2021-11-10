const express = require('express');
const router = express.Router();
const suplementsController = require('../controllers/suplements.controller');

//Routes with Controllers
router.get('/all', suplementsController.allSuplements);
router.get('/byid/:id', suplementsController.contractById);
router.post('/create', suplementsController.create);
router.put('/update/:id', suplementsController.update);
router.delete('/delete/:id', suplementsController.delete);



module.exports = router;