import mongoose from 'mongoose';

import server from './configs/express.config';

import Member from './models/Member.model';
import Project from './models/Project.model';

mongoose.connect('mongodb://localhost/');

mongoose.connection.on('connected', () => {
    
    console.log('connection to database established');
    
    const app = server.init();

    app.listen(3000, () => {
        console.log('app started, listening on port 3000');
    });

    //Members
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
    });

    //Projects
    //addProject
    app.post('/project', (req, res) => {
        //création du projet dans la bd
        const project = req.body;
        Project.create(project).then(() => {
            res.json({ message : 'Projet ajoute avec succes' })
        });
    });     
    //updateProject
    app.put('/project', (req, res) => {
        const project = req.body;
        Project.findById(project._id).then(projectdb => {
            Object.assign(projectdb, project);
            projectdb.save().then(() => {
                res.json({message: 'Projet modifie avec succes'});
            });
        });
    });
    //getAllProjects
    app.get('/project', (req, res) => {
        //recuperation de tous les projets existants
        Project.find().then((projects) => {
            res.json(projects);
        });
    });
    //getProjectById
    app.get('/project/:id', (req, res) => {
        //Selectionner un projet
        Project.find({_id: req.params.id}).then(project => {
            res.json(project);
        });
    });
    //deleteProject
    app.delete('/project/:id', (req ,res) => {
        const projectId = req.params.id;
        Project.deleteOne({ _id: projectId}).then(() => {
            res.json({ message: 'projet supprime avec succes'});
        });
    });

}); 

mongoose.connection.on('error', () => {
    throw new Error('unable to establish connection');
}); 

