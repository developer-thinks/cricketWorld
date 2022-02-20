import { Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core'
import React from 'react'
import Axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'

const AllPlayers = () => {

  const [players, setPlayers] = useState([])

  useEffect(()=>{
    Axios.get('http://localhost:5000/icc/allplayers')
    .then(response=>{
      console.log(response);
      setPlayers(response.data)
    })
  },[])


  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell> Joursey no </TableCell>
          <TableCell> Full Name  </TableCell>
          <TableCell>  Total runs  </TableCell>
          <TableCell> Highest score  </TableCell>
          <TableCell> fours </TableCell>
          <TableCell> sixes </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {
          players ? 
          players.map((player)=>(
            <TableRow>
                <TableCell> {player.jourseyNo} </TableCell>
                <TableCell> {player.playerName} </TableCell>
                <TableCell> {player.totalRuns} </TableCell>
                <TableCell> {player.highestScore} </TableCell>
                <TableCell> {player.fours} </TableCell>
                <TableCell> {player.sixes} </TableCell>
              </TableRow>
          )) : <h3> Loading</h3>
        }
      </TableBody>
    </Table>
  )
}

export default AllPlayers
