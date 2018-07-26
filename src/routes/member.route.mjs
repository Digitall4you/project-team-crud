import express from 'express';

import Member from '../models/Member.model';

const router = express.Router();

     //getAllMember
        router.route('/member')
            .get((req, res) => {
            //recuperation de tous les membres
                Member.find().then((members) => {
                res.json(members);
            });
        });
/*
        //getMemberById
        app.get('/member/:id', (req, res) => {
            //Selectionner un membre
            Member.find({_id: req.params.id}).then(member => {
                res.json(member);
            });
        });
        
        //addMember
        app.post('/member', (req, res) => {
            //Ajouter de membre dans la bd
            const member = req.body;
            Member.create(member).then(() => {
                res.json({ message : 'Membre ajoute avec succes' })
            });
        });

        //updateMember
        app.put('/member', (req, res) => {
            const member = req.body;
            Member.findById(member._id).then(memberdb => {
                Object.assign(memberdb, member);
                memberdb.save().then(() => {
                    res.json({message: 'modifie avec succes'});
                });
            });
        });

        //deleteMember
        app.delete('/member/:id', (req ,res) => {
            const memberId = req.params.id;
            Member.deleteOne({ _id:memberId}).then(() => {
                res.json({ message: 'supprime avec succes'});
            });
        });*/
export default router;