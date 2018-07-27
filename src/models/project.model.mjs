import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
    nom: {
        type: String,
        required:true,
        trim: true
    },
    dateDebut: {
        type: Date,
        required:true,
        trim: true
    },
    dateFin: {
        type: Date,
        required:true,
        default: Date.now
    },
    description: {
        type: String,
        required:true,
        trim: true
    },
    statut: {
        type: String,
        required:true,
        trim: true
    }
});

export default mongoose.model('Project', projectSchema);;