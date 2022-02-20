import { Table, TableBody, TableCell, TableHead, TableRow, Button } from '@material-ui/core'
import React from 'react'
import Axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import {useNavigate} from 'react-router-dom'

import './common.css'

const AllPlayers = () => {

  const [players, setPlayers] = useState([])
  const nevigate = useNavigate()

  useEffect(()=>{
    initializeList()
  },[])

  const initializeList = async ()=>{
    Axios.get('http://localhost:5000/icc/allplayers')
    .then(response=>{
      setPlayers(response.data)
    })
  }

  const handleDelete = (id)=>{
    console.log(id);
    Axios.delete(`http://localhost:5000/icc/remove/${id}`)
    .then(response=>{
      initializeList()
    })
  } 

  const handleUpdate = (id)=>{
    console.log(id);
    nevigate(`/addplayer/update/${id}`)
  }

  return (
    <Table className='table'>
      <TableHead className='tableHead'>
        <TableRow>
          <TableCell> Joursey no </TableCell>
          <TableCell> Full Name  </TableCell>
          <TableCell>  Total runs  </TableCell>
          <TableCell> Highest score  </TableCell>
          <TableCell> fours </TableCell>
          <TableCell> sixes </TableCell>
          <TableCell> Operations </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {
          players ? 
          players.map((player)=>(
            <TableRow key={player._id}>
                <TableCell> {player.jourseyNo} </TableCell>
                <TableCell> {player.playerName} </TableCell>
                <TableCell> {player.totalRuns} </TableCell>
                <TableCell> {player.highestScore} </TableCell>
                <TableCell> {player.fours} </TableCell>
                <TableCell> {player.sixes} </TableCell>
                <TableCell >
                  <Button style={{margin : "0 4px"}} variant='outlined' color='primary' onClick={()=>handleUpdate(player._id)} > Update</Button>
                  <Button style={{margin : "0 4px"}} variant='outlined' color='secondary' onClick={()=>handleDelete(player._id)} > Delete</Button>
                </TableCell>
              </TableRow>
          )) : <h3> Loading</h3>
        }
      </TableBody>
    </Table>
  )
}

export default AllPlayers
