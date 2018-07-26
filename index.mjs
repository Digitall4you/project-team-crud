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

    //getAllMember
    app.get('/member', (req, res) => {
        //recuperation de tous les membres
        Member.find().then((members) => {
            res.json(members);
        });
    });

    //getMemberById
    app.get('/member/:id', (req, res) => {
        //Selectionner un membre
        Member.find({_id: req.params.id}).then(member => {
            res.json(member);
        });
    });
    
    //addMember
    app.post('/member', (req, res) => {
        console.log('POST', req.body);
        //Ajouter de membre dans la bd
        const member = req.body;
        Member.create(member).then(() => {
            res.json({ message : 'Membre ajouté avec succès' })
        });
    });

    //updateMember
    app.put('/member', (req, res) => {
        const member = req.body;
        Member.findById(member._id).then(memberdb => {
            Object.assign(memberdb,member);
            memberdb.save().then(() => {
                res.json({message: 'modifié avec succès'});
            });
        });
    });

    //deleteMember
    app.delete('/member/:id', (req ,res) => {
        const memberId = req.params.id;
        Member.deleteOne({ _id:memberId}).then(() => {
            res.json({ message: 'supprimé avec succes'});
        });
    });
}); 

mongoose.connection.on('error', () => {
    throw new Error('unable to establish connection');
}); 

