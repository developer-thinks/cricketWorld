const router = require('express').Router()
const Player = require('../models/Player');

router.post('/register', async(req,res)=>{
    const newPlayer = await new Player(req.body)
    const registereduser = await newPlayer.save()
    res.status(201).json("Successfully registered")
})

router.get('/allplayers', async (req,res)=>{
    const allplayers = await Player.find()
    res.status(200).json(allplayers)
})

router.put('/update', async(req,res)=>{
    const player = await Player.findOneAndUpdate(req.body.jourseyNo,{
        $set : req.body
    } )
    res.status(200).json(player)
})

router.delete('/remove', async(req,res)=>{
    const player = await Player.findOneAndDelete(req.body.jourseyNo)
    player && res.status(200).json("success")
})

module.exports = router;