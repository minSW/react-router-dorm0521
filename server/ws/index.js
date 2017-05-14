import express from 'express';
/* import Your WebSockt
import A from './A';
import B from './B';
*/
import chat from './chat';
const router = express.Router();
/* use your websocket 
router.use('/A', A);
router.use('/B', B);
*/
router.use('/chat',chat);
export default router;
