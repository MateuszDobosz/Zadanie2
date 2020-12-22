# Zadanie 2

## LIVE : http://176.107.131.27:5111
## Endpoints: 

# GET: 

- /internal/users - returns all users
- http://176.107.131.27:5111/internal/users

### Permission "read" required: 
- /public/logs  | /public/logs?from=1584970029449&to=1584970031938 - returns all logs | returns logs from - to (timestamps)
- http://176.107.131.27:5111/public/logs headers: {'authorization-token' : 320ca9c4-ed20-4f09-bcb8-9b34b976b501}
- http://176.107.131.27:5111/public/logs?from=1584970029449&to=1584970031938 headers: {'authorization-token' : 320ca9c4-ed20-4f09-bcb8-9b34b976b501}
- /public/logs/uuid - returns specified log
- http://176.107.131.27:5111/public/logs/511d80fe-493e-482d-8ae1-9d692d904290 headers: {'authorization-token' : 320ca9c4-ed20-4f09-bcb8-9b34b976b501}


# POST: 

### Only Admin: 
- /internal/users - creates new user, body: {username: "test", permissions: ["create","read"]}
- http://176.107.131.27:5111/internal/users  headers: {'authorization-token' : 320ca9c4-ed20-4f09-bcb8-9b34b976b501} body: {"username":"StworzonyPrzezAdmina",
    "permissions":["read"]
