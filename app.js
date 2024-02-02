const express = require('express');
const swaggerTools = require('swagger-tools');
const YAML = require('yamljs');
const swaggerDoc = YAML.load('./swagger.yaml');
const {connectDB} = require("./config/db")
const app = express();
const port = process.env.PORT || 3000;
swaggerTools.initializeMiddleware(swaggerDoc, function (middleware) {
  app.use(middleware.swaggerMetadata());
  app.use(middleware.swaggerValidator());
  app.use(middleware.swaggerRouter({controllers: './controllers', useStubs: process.env.NODE_ENV === 'development'}));
  app.use(
    middleware.swaggerUi({
      swaggerUi: "/docs",
      apiDocs: "/api-docs",
    })
  );
});

app.listen(port, function () {
  console.log(`App running on port ${port}`);
  connectDB();
});

module.exports = app; // for testing