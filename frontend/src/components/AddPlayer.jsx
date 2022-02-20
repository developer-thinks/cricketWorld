import { FormControl, FormGroup, Input, InputLabel,Typography as Typo, Button, makeStyles } from '@material-ui/core'
import React, { useState } from 'react'
import Axios from 'axios'
import './common.css'
import {useNavigate} from 'react-router-dom'

const useStyle = makeStyles({
  container :{
      display : "flex",
      flexDirection : "column",
      alignItems : "center",
      width : "100%",
      justifyContent : "center",
      margin : "2rem 0"
    },
    formData:{
      margin : "0.5rem 0",
      width : "25rem"
    }
}) 

const initialValues = {
  jourseyNo : "",
  playerName : "",
  totalRuns : "",
  highestScore : "",
  fours : "",
  sixes : ""
}

const AddPlayer = () => {

  const [players, setPlayers] = useState(initialValues);
  const {jourseyNo,playerName, totalRuns,highestScore, fours, sixes} = players

  const negivate = useNavigate()

  const handleChange = (e)=>{
    setPlayers({...players, [e.target.name] : e.target.value})
  }

  const handleSubmit = (e)=>{
    e.preventDefault()

    Axios.post('http://localhost:5000/icc/register', players)
    .then(response=>{
    console.log(response);
    negivate('/allplayers')

  })
  }

  

  const classes = useStyle();

  return (
    <div className={classes.container}>
      <Typo></Typo>
      <FormGroup>
      <Typo variant='h4'> Add Player</Typo>
      <FormControl className={classes.formData}>
        <InputLabel> Joursey No. </InputLabel>
        <Input onChange={(e)=> handleChange(e)} value={jourseyNo} name= "jourseyNo" />
      </FormControl>
      <FormControl className={classes.formData}>
        <InputLabel> Full Name </InputLabel>
        <Input onChange={(e)=> handleChange(e)} value={playerName} name= "playerName" />
      </FormControl>
      <FormControl className={classes.formData}>
        <InputLabel> Total Runs </InputLabel>
        <Input onChange={(e)=> handleChange(e)} value={totalRuns} name= "totalRuns" />
      </FormControl>
      <FormControl className={classes.formData}>
        <InputLabel> Highest score </InputLabel>
        <Input onChange={(e)=> handleChange(e)} value={highestScore} name= "highestScore" />
      </FormControl>
      <FormControl className={classes.formData}>
        <InputLabel>  fours </InputLabel>
        <Input onChange={(e)=> handleChange(e)} value={fours} name= "fours" />
      </FormControl>
      <FormControl className={classes.formData}>
        <InputLabel> sixes </InputLabel>
        <Input onChange={(e)=> handleChange(e)} value={sixes} name= "sixes" />
      </FormControl>
      <Button variant='contained' onClick={handleSubmit} color='primary'>Add</Button>
    </FormGroup>
    </div>
  ) 
}

export default AddPlayer