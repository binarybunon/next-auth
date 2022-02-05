import express from 'express';

const router = express.Router();

// middleware
import { requireSignin } from '../middlewares';

// controllers
import { userList } from '../controllers/data';

router.get('/data', userList);

module.exports = router;
