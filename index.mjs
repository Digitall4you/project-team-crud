import express from 'express';
import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost/');

mongoose.connection.on('connected', () => {
    console.log('connecté');
} );

mongoose.connection.on('error', () => {
    throw new Error('connexion impossible');
}); 

const app = express();


app.listen(3000, () => {
    console.log('app started, listening on port 3000');
});


app.get('/teamMember', (req, res) => {
    var teamMember = [
        { id: 1, nom: "rakoto", prenom: "hery", role:"analyste fonctionnel"},
        { id: 2, nom: "randria", prenom: "jean", role: "pilote de systeme"},
        { id: 3, nom: "rabe", prenom: "ando", role: "programmeur"}
    ]
    res.json(teamMember);
});


app.post('/projet', (req, res) => {
    console.log("POST reçue");
});