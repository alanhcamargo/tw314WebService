module.exports = app => {
    const Status = app.db.models.Status;

    app.route("/status")
        .get((req, res) => {
            Status.findAll({
                    where: {
                        user_id: req.user.id
                    }
                })
                .then(result => res.json(result))
                .catch(error => {
                    res.status(412).json({
                        msg: error.message
                    });
                });
        })
        .post((req, res) => {
            Status.create(req.body.status.id)
                .then(result => res.json(result))
                .catch(error => {
                    res.status(412).json({
                        msg: error.message
                    });
                });
        })

    app.route("/status/:id")
        .get((req, res) => {
            Status.findOne({
                    where: {
                        id: req.params.id,
                        user_id: req.user.id
                    }
                })
                .then(result => {
                    if (result) {
                        res.json(result);
                    } else {
                        res.sendStatus(404);
                    }
                })
                .catch(error => {
                    res.status(412).json({
                        msg: error.message
                    });
                });
        })
        .put((req, res) => {
            Status.update(req.body, {
                    where: {
                        id: req.params.id,
                        user_id: req.user.id
                    }
                })
                .then(result => res.sendStatus(204))
                .catch(error => {
                    res.status(412).json({
                        msg: error.message
                    });
                });
        })
        .delete((req, res) => {
            Status.destroy({
                    where: {
                        id: req.params.id,
                        user_id: req.user.id
                    }
                })
                .then(result => res.sendStatus(204))
                .catch(error => {
                    res.status(412).json({
                        msg: error.message
                    });
                });
        });
};
