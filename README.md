# ZenGo Task - TODO app
A serverless personal TODO application using AWS platform.

# About 
Using "template.yaml" and the AWS Cloudformation stack service -  deploying a serverless TODO application with 2 APIs - create new TODO, get all TODOs.

# How it works 
Using AWS Cloudformation service, we create a new stack (using the "template.yaml" file in this repo). 

With this template - the AWS Cloudformation stack service deploying:

- DynamoDB table "todos-table" - presents a TODOs list.
- Lambda function  - "DDBHandlerFunction" responsible to handle the TODOs list.
- APIGateways that triggers the Lambda function and helps the user to integrate with the function using API endpoint.

# Application URL and using commands
  - API endpoint :  https://fvpt1vubua.execute-api.us-east-2.amazonaws.com/todos

  - Command to create new TODO :
  
     curl -v -X "PUT" -H "Content-Type: application/json" -d "{\"todo\": \"Your next todo\"}" https://fvpt1vubua.execute-api.us-east-2.amazonaws.com/todos
  
  - Command to get all TODOs : 
  
      curl -v https://fvpt1vubua.execute-api.us-east-2.amazonaws.com/todos
      
# Examples of Using the application API's

1. request command - curl -v https://fvpt1vubua.execute-api.us-east-2.amazonaws.com/todos
  
   response - {"Items":[],"Count":0,"ScannedCount":0}
   
2. request  command - curl -v -X "PUT" -H "Content-Type: application/json" -d "{\"todo\": \"Go for a run\"}" https://fvpt1vubua.execute-api.us-east-2.amazonaws.com/todos
   
   request command - curl -v https://fvpt1vubua.execute-api.us-east-2.amazonaws.com/todos
   
   response - {"Items":[{"todo":"Go for a run"}],"Count":1,"ScannedCount":1}
   
3. request  command - curl -v -X "PUT" -H "Content-Type: application/json" -d "{\"todo\": \"Study for the upcoming math test\"}" https://fvpt1vubua.execute-api.us-east-2.amazonaws.com/todos
   
   request command - curl -v https://fvpt1vubua.execute-api.us-east-2.amazonaws.com/todos
   
   response - {"Items":[{"todo":"Study for the upcoming math test"},{"todo":"Go for a run"}],"Count":2,"ScannedCount":2}
   
   
