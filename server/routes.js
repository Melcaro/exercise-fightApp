const UsersRouter = require('./routes/UsersRouter');

function routes(app) {
  app.use('/api/v1/users', UsersRouter);
}

module.exports = routes;
