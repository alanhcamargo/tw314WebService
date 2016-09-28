module.exports = app => {
  const Ticket = app.db.models.ticket;

  app.route("/consultarInformacoesSenha/:id")
    .get((req, res) => {
      Ticket.findOne({
        where: {
          numero_ticket: req.params.id
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
        res.status(412).json({msg: error.message});
      });
    });
};
