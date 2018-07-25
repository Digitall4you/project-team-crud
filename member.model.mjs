import mongoose from 'mongoose';

const memberSchema = new mongoose.Schema({
    nom: {
        type: String,
        requird:true,
        trim: true
    },
    prenom: {
        type: String,
        requird:true,
        trim: true
    },
    role: {
        type: String,
        requird:true,
        trim: true
    }
});

export default mongoose.model('Member', teamSchema);;