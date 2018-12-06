module.exports = class Controller {

    static checkAuth(req, res, next) {
        if (req.session && req.session.login && req.session.login != null) {
            res.send({success: 'Autenticado!'});
            return true;
        } else {
            res.send({error: 'Não autenticado!'});
        }
    }
    
};