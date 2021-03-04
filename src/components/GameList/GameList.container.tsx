import React, {  ReactElement, useState,useEffect } from 'react'
import GameListRender from './GameList.render'
import { Game } from 'types'
import axios from 'axios'
import { API_HOST, API_KEY } from './constants'

const GameListContainer = (): ReactElement => {
	const [games, setGames] = useState<Game[]>([])
	const [err, setErr] = useState<string>('')

	useEffect(() => {
		axios
			.get('/games', {
				baseURL: `https://${API_HOST}/api`,
				headers: {
					'x-rapidapi-key': API_KEY,
					'x-rapidapi-host': API_HOST,
				},
				params: {
					platform:'browser'
				},
			})
			.then(res => {
				console.log(res.data,"$$$$$$$$$$$$$$$$$");
				setGames(res.data)
				
			})
			.catch(e => setErr(e.message))
	}, [])
	return (
		<GameListRender err={err} games={games}  />
	)
}

export default GameListContainer
