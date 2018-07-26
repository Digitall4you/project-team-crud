import Project from '../models/Project.model';

import bodyParser from 'body-parser';

class ProjectController {

    addProject(req, res) {
        const project = req.body;
        Project.create(project).then(() => res.json({ message : 'Projet ajoute avec succes' }));
    }

    updateProject(req, res) {
        const project = req.body;
        Project.findById(project._id).then(projectdb => Object.assign(projectdb, project));
        projectdb.save().then(() => res.json({message: 'Projet modifie avec succes'}));
    }

    getAllProjects(req, res) {
        Project.find().then((projects) => res.json(projects));
    }

    getProjectById(req, res) {
        Project.find({_id: req.params.id}).then(project => res.json(project));
    }

    deleteProject(req, res) {
        const memberId = req.params.id;
        Member.deleteOne({ _id:memberId}).then(() => res.json({ message: 'supprime avec succes'}));
    }

}
export default new ProjectController;