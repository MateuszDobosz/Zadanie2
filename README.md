# Zadanie 2

## LIVE : http://176.107.131.27:5111
## Endpoints: 

# GET: 

- /internal/users - returns all users
- /internal/users/id - return specified user
### Permission "read" required: 
- /public/logs  | /public/logs?from=1584970029449&to=1584970031938 - returns all logs | returns logs from - to (timestamps)
= /public/logs/uuid - retutns specified log

# POST: 

### Only Admin: 
- /internal/users - creates new user, body: {username: "test", permissions: ["create","read"]}
