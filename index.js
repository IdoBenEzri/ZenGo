const AWS = require("aws-sdk");
const dynamo = new AWS.DynamoDB.DocumentClient();
exports.handler = async (event, context) => {
  let body;
  let statusCode = 200;
  const headers = {
    "Content-Type": "application/json"
  };
  try {
    switch (event.routeKey) {
      case "GET /todos":
        body = await dynamo
          .scan({ TableName: "todos-table" })
          .promise();
        break;
      case "PUT /todos":
        let requestJSON = JSON.parse(event.body);
        await dynamo
          .put({
            TableName: "todos-table",
            Item: {
              todo: requestJSON.todo
            }
          })
          .promise();
        body = `Put todo ${requestJSON.todo}`;
        break;
      default:
        throw new Error(`Unsupported route: "${event.routeKey}"`);
    }
  } catch (err) {
    statusCode = 400;
    body = err.message;
  } finally {
    body = JSON.stringify(body);
  }
  return {
    statusCode,
    body,
    headers
  };
};