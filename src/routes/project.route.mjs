import express from 'express';

import projectController from '../controllers/project.controller';

const router = express.Router();

    router.route('/')
        .post(projectController.addProject)
        .put(projectController.updateProject)
        .get(projectController.getAllProjects);
        
    router.route('/:id')
        .get(projectController.getProjectById)
        .delete(projectController.deleteProject);

        /*/addProject
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
        */
        /*router.route('/project')
        .get((req, res) => {
            //recuperation de tous les projets existants
            Project.find().then((projects) => {
                res.json(projects);
            });
        });*/
        /*getProjectById
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
        });*/

export default router;