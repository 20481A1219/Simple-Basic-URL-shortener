const express = require('express');
const { handleposturl,handleGetAnalytics } = require('../controllers/url');
const router = express.Router();

router.post("/",handleposturl);

router.get("/analytics/:shortId",handleGetAnalytics);

module.exports=router;