const router = require('express').Router()
const Player = require('../models/Player');

router.post('/register', async(req,res)=>{
    const newPlayer = await new Player(req.body)
    const registereduser = await newPlayer.save()
    res.status(201).json(registereduser)
})

router.get('/allplayers', async (req,res)=>{
    const allplayers = await Player.find()
    res.status(200).json(allplayers)
})
router.get('/player/:id', async (req,res)=>{
    const player = await Player.findById(req.params.id)
    player && res.status(200).json(player)
})

router.put('/update/:id', async(req,res)=>{
    const player = await Player.findByIdAndUpdate(req.params.id,{
        $set : req.body
    }, {
        new : true
    } )
    res.status(200).json(player)
})

router.delete('/remove/:id', async(req,res)=>{
    const player = await Player.findByIdAndDelete(req.params.id)
    player && res.status(200).json("success")
})

module.exports = router;