import { Router } from "express";
import users from './routes/users';
const router = Router();

router.use('/users', users)

router.all('/*', (req, res) => {
    return res.status(404).json({ message: 'route not found' })
})

export default router;