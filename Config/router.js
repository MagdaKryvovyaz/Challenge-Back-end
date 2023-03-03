const express = require('express');

const router = express.Router();
const { homepage, onePost, deletePost, editPost, cancelEdit, saveChange } = require('../Controler/controler')

router.all("/feed", homepage);


router.get("/feed/:id", onePost)
router.post("/feed/:id/delete", deletePost)
router.post("/feed/edit/:id", editPost)

router.post("/feed/edit/:id/cancel", cancelEdit)
router.post("/feed/edit/:id/save", saveChange)

 
module.exports = router