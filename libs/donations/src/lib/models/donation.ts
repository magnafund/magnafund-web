import { Moment } from 'moment';

export interface Donation {
    id? : number;
    title: string;
    description: string;
    amountGoal: number;
    endDate: any;
    userId?: number | string;
    amountRaised?: number | null;
    dateCreated?: string;
    status?: number;
    categoryId?: number;
    shortDescription : string;
}