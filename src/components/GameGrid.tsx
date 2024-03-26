import React, { useEffect, useState } from 'react'
import apiClient from '../services/api-client'
import { Text } from '@chakra-ui/react';

interface Games {
    id: number;
    name : string;
}

interface FetchGamesResponse {
    count : number;
    results : Games[];
}

const GameGrid = () => {
  
 const [Games, setGames] = useState<Games[]>([]);
 const [error, setError] = useState();

 useEffect(()=> {
    apiClient.get<FetchGamesResponse>('/games')
    .then(res=> setGames(res.data.results))
    .catch(err => setError(err.message))
 })
    
  return (
    <>
    {error && <Text>{error}</Text>}
    <ul>
        {Games.map(game=><li key={game.id}>{game.name}</li>)}
    </ul>
    </>
  )
}

export default GameGrid
