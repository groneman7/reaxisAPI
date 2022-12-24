import { model, Schema } from 'mongoose';

export type Deck = {
    _id: string; // This will probably change to match MongoDB's ObjectId structure.
    cards: string[]; // cardIds
    collaborators: string[]; // userIds
    isCopy: boolean;
    notifications: string[] | null; // List of notifications. This will probably also change to be an object of some sort.
    owner: string; // userId
    parentId?: string; // _id of original deck IF isCopy === true
    subscriptions: string[]; // userIds
};

const DeckSchema = new Schema<Deck>({
    cards: Array,
    collaborators: Array,
    isCopy: Boolean,
    notifications: { type: Array, required: false },
    owner: String,
    parentId: { type: String, required: false },
    subscriptions: Array,
});

export const DeckModel = model('Deck', DeckSchema, 'decks');
