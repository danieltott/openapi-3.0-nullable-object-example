# openapi-3.0-nullable-object-example

## To use

```
pnpm install
pnpm start
```

Then make a request to http://localhost:3000/test

If your response matches the schema, you should see your expected JSON. If not, you'll get an error.

To see this in action, in `index.js`, uncomment the `notActuallyNullableObjectWithAllOf` line:

```diff
-     // notActuallyNullableObjectWithAllOf: null,
+     notActuallyNullableObjectWithAllOf: null,
```

Then after saving, you should see a response similar to this:

```json
{
  "message": "/response/notActuallyNullableObjectWithAllOf must be object, /response/notActuallyNullableObjectWithAllOf must be object",
  "errors": [
    {
      "path": "/response/notActuallyNullableObjectWithAllOf",
      "message": "must be object",
      "errorCode": "type.openapi.validation"
    },
    {
      "path": "/response/notActuallyNullableObjectWithAllOf",
      "message": "must be object",
      "errorCode": "type.openapi.validation"
    }
  ]
}
```
