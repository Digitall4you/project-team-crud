import express from 'express';

import memberController from '../controllers/member.controller';

const router = express.Router();

    router.route('/')
        .get(memberController.getAllMembers)
        .post(memberController.addMember)
        .put(memberController.updateMember);
        
    router.route('/:id')
        .get(memberController.getMemberById)
        .delete(memberController.deleteMember);
        


            //recuperation de tous les membres;
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