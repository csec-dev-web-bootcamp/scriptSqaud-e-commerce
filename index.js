import express from "express";


const app = express();

const PORT = process.env.PORT || 3000;

const mockuers = [
    {id: 1, username: "nati", displayName: "Nati"},
    {id: 2, username: "aman", displayName: "Aman"},
    {id: 3, username: "abel", displayName: "Abel"},
]

app.get("/", (request, response) => {
    response.status(201).send({ msg: "what do you want" })
});

app.get("/api/users", (request, response) => {
    response.send(mockuers);
});

app.get("/api/users/:id", (request, response) => {

    console.log(request.params);
    const parsedId = parseInt(request.params.id);
    console.log(parsedId);
    if (isNaN(parsedId)) return response.status(400).send({ msg: "bad request. Invalid ID"});
     
    const finduser = mockuers.find((user) => user.id == parsedId);
    if (!finduser) return response.sendStatus(404);
    return response.send(finduser);
});
  

app.listen(PORT, () => {
    console.log(`Running on port ${PORT} `)
});