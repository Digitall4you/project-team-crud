import mongoose from 'mongoose';

const memberSchema = new mongoose.Schema({
    nom: {
        type: String,
        required:true,
        trim: true
    },
    prenom: {
        type: String,
        required:true,
        trim: true
    },
    role: {
        type: String,
        required:true,
        trim: true
    }
});

export default mongoose.model('Member', memberSchema);;