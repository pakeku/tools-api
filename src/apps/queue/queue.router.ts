import { Router, Request, Response } from "express";
import { getTickets } from './queue.service';

const queueRouter = Router();

queueRouter.get("/", async (req: Request, res: Response) => {
    const tickets = await getTickets();
    const data = {
        tickets,
        message: 'System Ticket Queue'
    }
    
    return res.send(data)
})

export { queueRouter };