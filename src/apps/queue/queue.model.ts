import mongoose from 'mongoose';

// Define the User Schema
const userSchema = new mongoose.Schema({
    given_name: String,
    family_name: String,
    nickname: String,
    name: String,
    picture: String,
    locale: String,
    updated_at: Date,
    email: {
        type: String,
        required: true
    },
    email_verified: Boolean,
    sub: String
});

// Create the User model based on the schema
const User = mongoose.model('User', userSchema);

// TypeScript interface for the User model
export interface IUser {
    given_name: string;
    family_name: string;
    nickname: string;
    name: string;
    picture: string;
    locale: string;
    updated_at: Date;
    email: string;
    email_verified?: boolean;
    sub: string;
}

// Define the Ticket Schema
const ticketSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        maxlength: 100
    },
    description: {
        type: String,
        required: true,
        trim: true,
        maxlength: 1000
    },
    status: {
        type: String,
        required: true,
        enum: ['Open', 'In Progress', 'Resolved', 'Closed'],
        default: 'Open'
    },
    priority: {
        type: String,
        required: true,
        enum: ['Low', 'Medium', 'High', 'Urgent'],
        default: 'Low'
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    assignedTo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        default: null
    }
});

// Create the Ticket model based on the schema
const Ticket = mongoose.model('Ticket', ticketSchema);

// TypeScript interface for the Ticket model
export interface ITicket {
    title: string;
    description: string;
    status: 'Open' | 'In Progress' | 'Resolved' | 'Closed';
    priority: 'Low' | 'Medium' | 'High' | 'Urgent';
    createdBy: mongoose.Types.ObjectId;
    assignedTo?: mongoose.Types.ObjectId;
}

export { User, Ticket };
