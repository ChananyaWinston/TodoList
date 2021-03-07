# TodoList
A todolist backend including notification service
A 2 tier backend that includes a service for CRUD operations of a todolist currently connecting to mongo db in atlas
and a service for notification that is listening for data to notify clients currently with hard coded mock data that emulates a connection to the db.
Both include Dockerfiles for runnign the app on containers.

Assumptions:
No need to deal with remind me later from the client side.
