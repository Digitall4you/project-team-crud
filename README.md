# Description
Le but du test est de créer un API nodejs qui permet de gérer une liste de projet avec les equipes pour chaque projet.

## Spec fonctionnel
* CRUD Projet:``nom, dateDebut, dateFin, description, statut (FINI, EN_COURS, ARRETER)``
* CRUD Equipe membre projet: ``nom, prenom, role``

## Spec technique

* API: Mongodb Expressjs, ES6
* Repository: Github
* Workflow: Utiliser le système de branch, pull request pour publier les changements

## Indication
Ne vous inquiétez pas si vous ne pouvez pas tout faire, faites de votre mieux :). Nous préférons de petits changements très propres et utiles plutôt que beaucoup de changements inachevés

## CRUD curl request 
## create member
curl -d '{"nom":"value1","prenom":"value2","role":"value3"}' -H "Content-Type: application/json" -X POST http://localhost:3000/api/member

## get all member
curl GET http://localhost:3000/api/member

## find member by id
curl GET http://localhost:3000/api/member/5b58c9c772785c298cf40470

## Update member
curl -X PUT -H "Content-Type: application/json" -d '{"_id":"5b58d8742dd0242b5c7db510","nom":"Ravoa","prenom":"Verinao","role":"programerera","__v":0}' http://localhost:3000/api/member

## Delete
curl -X "DELETE" http://localhost:3000/api/member/5b58c9c772785c298cf40470

## add project
curl -d '{"nom":"ARPA","dateDebut":"2016-05-18T16:00:00Z","dateFin":"2016-06-18T16:00:00Z","description":"projet arpa","statut":"FINI"}' -H "Content-Type: application/json" -X POST http://localhost:3000/api/project
curl -d '{"nom":"DARPA","dateDebut":"2018-05-18T16:00:00Z","dateFin":"2018-06-18T16:00:00Z","description":"projet darpa","statut":"EN_COURS"}' -H "Content-Type: application/json" -X POST http://localhost:3000/api/project
curl -d '{"nom":"KARPA","dateDebut":"2015-05-18T16:00:00Z","dateFin":"2016-06-18T16:00:00Z","description":"projet karpa","statut":"ARRETER"}' -H "Content-Type: application/json" -X POST http://localhost:3000/api/project
curl -d '{"nom":"TARPA","dateDebut":"2015-01-18T16:00:00Z","dateFin":"2016-02-18T16:00:00Z","description":"projet tarpa","statut":"FINI"}' -H "Content-Type: application/json" -X POST http://localhost:3000/api/project

## Update project
curl -X PUT -H "Content-Type: application/json" -d '{"_id":"5b59b1294dd3a1017ceb829f","nom":"KARPANNO","dateDebut":"2015-05-18T16:00:00.000Z","dateFin":"2016-06-18T16:00:00.000Z","description":"projet karpa","statut":"ARRETER","__v":0}' http://localhost:3000/api/project

## find project by id
curl GET http://localhost:3000/api/project/5b59b11e4dd3a1017ceb829e

## Delete a project
curl -X "DELETE" http://localhost:3000/api/project/5b59bc8ef020af171c8e1734
