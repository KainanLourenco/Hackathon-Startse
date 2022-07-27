const express = require('express');
const router = express.Router();
const borrowerController = require('../controller/borrowerController');

router.get('/', borrowerController.get);
router.get('/:id', borrowerController.getById);
router.get('/:email', borrowerController.getByEmail);
router.post('/', borrowerController.post);
router.put('/:id', borrowerController.put);
router.delete('/:id', borrowerController.delete);

module.exports = router;