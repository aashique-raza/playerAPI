

import express from 'express'
import { getAllPlayersData,createPlayerData ,deletePlayerdata} from '../controllers/players.controller.js';

const router=express.Router()


router.get('/v1/get-players-data',getAllPlayersData)
router.post('/v1/create-player-data',createPlayerData)

router.delete('/v1/delete-player-data/:id',deletePlayerdata)




export default router;