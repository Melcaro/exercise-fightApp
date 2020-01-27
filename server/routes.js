const UsersRouter = require('./routes/UsersRouter');

function routes(app) {
  app.use('/api/users', UsersRouter);
}

module.exports = routes;
