const express = require('express');
const router = express.Router();
const contractsController = require('../controllers/contracts.controller');
const upload = require('../libs/storage');

//Routes with Controllers
router.get('/all', contractsController.allcontracts);
router.get('/byid/:id', contractsController.contractById);
router.post('/create', contractsController.create);
router.post('/atached/:id', upload.single('contractAttached'), contractsController.atachedContrtact);
router.put('/update/:id', contractsController.update);
router.delete('/delete/:id', contractsController.delete);



module.exports = router;