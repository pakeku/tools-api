import { Ticket, ITicket } from './queue.model';

export const getTickets = async (): Promise<ITicket[]> => {
    return await Ticket.find();
}

export const createTickets = async (tickets: ITicket[]) => {
    return await Ticket.create(tickets);
}