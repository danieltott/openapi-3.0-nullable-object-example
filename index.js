const express = require("express");
const OpenApiValidator = require("express-openapi-validator");

const app = express();
const port = 3000;

app.use(
  OpenApiValidator.middleware({
    apiSpec: "./testspec.yml",
    validateRequests: true,
    validateResponses: true,
  })
);

// we need JSON
app.use(express.json());

app.get("/test", (req, res, next) => {
  res.json({
    // the commented out properties are the ones that should be failing - uncomment them and make a request to see the error

    nullableObject: null,

    // allOf

    // notActuallyNullableObjectWithAllOf: null,
    // notActuallyNullableObjectWithAllOfAndNullableOptions: null,
    // notActuallyNullableObjectWithAllOfRefs: null,
    nullableObjectWithAllOfAndNullableOptions: null,
    nullableObjectWithAllOf: null,
    nullableObjectWithAllOfRefs: null,

    // anyOf

    // notActuallyNullableObjectWithAnyOf: null,
    nullableObjectWithAnyOf: null,
    // notActuallyNullableObjectWithAnyOfRefs: null,
    nullableObjectWithAnyOfRefs: null,

    // oneOf

    // notActuallyNullableObjectWithOneOf: null,
    nullableObjectWithOneOf: null,
    // notActuallyNullableObjectWithOneOfRefs: null,

    normalNullableRef: null,
    // notActuallyNullableRefAllOf: null,
    nullableRefAllOf: null,
    nullableRefOneOf: null,
    refWithNullableReferencesOneOf: null,
    refWithNullableReferencesAllOf: null,
    // refWithNotActuallyNullableReferencesAllOf: null,
  });
});

app.use((err, req, res, next) => {
  // format error
  res.status(err.status || 500).json({
    message: err.message,
    errors: err.errors,
  });
});

// listen to the port
const server = app.listen(port, () => {
  console.log("Listening on", server.address());
});
