# TS-STARTER

Project Working on localhost:3000. Address and port can be changed at .env file
Using https://openexchangerates.org for rates conversion. This example has the free version, so only USD to any other currency conversions are allowed, if a valid key is used then all type of conversions are possible.

Simple starter project for typescript

If you need to wait on other services to start you can use in the docker file:

```
CMD [ "./wait.sh" , "lcoalhost:3000", "--", "node", "index.js" ]
```
