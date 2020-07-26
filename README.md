# TS-STARTER
**Node.js + ES6 + Typescript Challenge**


Project Working on localhost:3000. 
Address and port can be changed at .env file
Using https://openexchangerates.org for rates conversion. 
This example is using the free version, so only USD to any other currency conversions are allowed, if a valid key is used then all type of conversions are possible.

Example request: localhost:3000/api/rates/convert?from=USD&to=ARS&email=edubeghe@gmail

This will only generate a response with status code 200, the results of conversion rate are logged.

Dockerfile & docker-compose already generated!
