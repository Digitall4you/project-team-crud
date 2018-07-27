import Member from '../models/Member.model';

import bodyParser from 'body-parser';

class MemberController {
    getAllMembers(req, res) {
        Member.find().then(members => res.json(members));
    }

    getMemberById(req, res) {
        Member.find({_id: req.params.id}).then(member => res.json(member));
    }

    addMember(req, res) {
        const member = req.body;
            Member.create(member).then(() => res.json({ message : 'Membre ajoute avec succes' }));
    }

    updateMember(req, res) {
        const member = req.body;
        Member.findById(member._id).then(memberdb => Object.assign(memberdb, member));
        memberdb.save().then(() => res.json({message: 'modifie avec succes'}));   
    }

    deleteMember(req,res) {
        const memberId = req.params.id;
        Member.deleteOne({ _id:memberId}).then(() => res.json({ message: 'supprime avec succes'}));
    }
    
    
}

export default new MemberController