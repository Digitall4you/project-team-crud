import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser'

import Member from './Member.model';

mongoose.connect('mongodb://localhost/');

mongoose.connection.on('connected', () => {
    console.log('connecté');

    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended : true }));

    app.listen(3000, () => {
        console.log('app started, listening on port 3000');
    });

    app.get('/member', (req, res) => {
        Member.find().then((members) => {
            res.json(members);
        });
    
    });

    app.post('/member', (req, res) => {
        console.log('POST', req.body);
    /*    const member = {
            nom: 'Rasoa',
            prenom: 'Herina',
            role: 'programmeur'
    };
        Member.create(member).then(() => {
            console.log("membre ajouté");
        });*/
    });
});

mongoose.connection.on('error', () => {
    throw new Error('connexion impossible');
}); 

