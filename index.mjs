import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

import Member from './Member.model';

mongoose.connect('mongodb://localhost/');

mongoose.connection.on('connected', () => {
    console.log('connection to database established');

    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended : true }));

    app.listen(3000, () => {
        console.log('app started, listening on port 3000');
    });

    app.get('/member', (req, res) => {
        //recuperation de tous les membres
        Member.find().then((members) => {
            res.json(members);
        });
    });

    app.get('/member/:id', (req, res) => {
        //Sélectionne un membre
        console.log('Get member by id, params:', req.params.id);
        Member.find({_id: req.params.id}).then(member => {
            res.json(member);
        });
    });
    
    app.post('/member', (req, res) => {
        console.log('POST', req.body);
        //Ajouter de membre dans la bd
        const member = req.body;
        Member.create(member).then(() => {
            console.log('membre ajouté');
        });
    });
});

mongoose.connection.on('error', () => {
    throw new Error('unable to establish connection');
}); 

