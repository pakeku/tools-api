import { Router, Request, Response } from 'express';
import { getSystemHealth, getAdminSystemHealth } from './health.service';

const healthRouter = Router();

healthRouter.get('/', async (req: Request, res: Response) => {
    // get bearer token from Authorization header
    const token = req.headers.authorization?.split(' ')[1];
    if (token) {
        const adminSytemHealth = await getAdminSystemHealth(token);
        res.send(adminSytemHealth);
        return;
    }

    try {
        const sysHealth = await getSystemHealth();
        res.status(200).send(sysHealth);
    } catch (error) {
        res.status(500).send({ message: 'Error getting system health', error });
    }
});

export { healthRouter };
