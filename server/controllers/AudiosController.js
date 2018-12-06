let Controller = require('./Controller');
var Audio = require('../models/Audio');

module.exports = class AudiosController extends Controller {

    index(req, res, next) {

        let params = req.query;
        let filter = {};
        if (typeof params.query != 'undefined') {
            filter =
                {
                    $or: [
                        {titulo: new RegExp(params.query, "i")},
                        {descricao: new RegExp(params.query, "i")}
                    ]
                }
        }
        Audio.find(filter).then((audios) => {
            res.send({title: 'Todos os áudios', audios, params});
        });
    }

    create(req, res, next) {
        this.checkAuth(req, res, next);
        res.send({title: 'Novo audio'});
    }

    store(req, res, next) {
        this.checkAuth(req, res, next);

        let body = req.body;

        let titulo = body.titulo;
        let descricao = body.descricao;
        let file = req.file;
        let path = "";

        let errors = [];
        if (file == undefined) {
            errors['audio'] = 'Obrigatório o envio do arquivo'
        } else {
            path = req.file.filename;
        }

        if (titulo == null || titulo.length < 3) {
            errors['titulo'] = 'Título inválido'
        }

        if (descricao == null || descricao.length < 6) {
            errors['descricao'] = 'Descrição inválida'
        }

        if (file && file.mimetype != 'audio/mp3') {
            errors['descricao'] = 'Arquivo inválido'
        }

        if (Object.keys(errors).length > 0) {
            res.send({title: 'Novo áudio', errors})
        } else {
            console.log("Entrou")
            new Audio({titulo, descricao, path})
                .save()
                .then((audio) => {
                    console.log(audio)
                    if (audio) {
                        res.redirect('/audios');
                    }
                });
        }
    }

    /* Daqui pra baixo não foi preciso implementar no projeto 1 */
    show(req, res, next) {
        Audio.find({id: req.params.id}).then((audio) => {
            res.send({audio});
        })
    }

    edit(req, res, next) {
        this.checkAuth(req, res, next);
        Audio.find({id: req.params.id}).then((audio) => {
            res.send({audio});
        })
    }

    update(req, res, next) {
        this.checkAuth(req, res, next);
        Audio.find().then((audio) => {
            res.send(audio);
        });
    }

    destroy(req, res, next) {
        this.checkAuth(req, res, next);
        Audio.find({id: req.params.id}).then((audio) => {
            audio.delete();
        })
    }
};