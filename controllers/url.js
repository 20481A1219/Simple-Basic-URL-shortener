const ShortUniqueId = require('short-unique-id');

const URL = require("../models/url");

const uid = new ShortUniqueId({length: 8});
const uuid=uid();

async function handleposturl(req,res){
    const body=req.body;

    if(!body.url){
        return res.status(400).json({status: "please provide the url"})
    }
    await URL.create({
        shortId: uuid,
        redirectURL: body.url,
        visitHistory:[],
    })
    
    res.status(200).json({id: uuid});
}

async function handleGetAnalytics(req,res){
    const shortId=req.params.shortId;
    const entry=await URL.findOne({shortId: shortId});
    res.status(200).json({"count":entry.visitHistory.length,"analytics":entry.visitHistory});
}

module.exports={
    handleposturl,
    handleGetAnalytics,
}