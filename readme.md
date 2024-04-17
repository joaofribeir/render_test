# Note App BE

This is the Backend for a Note taking app.
Written in Node with Express and Mongo

## Endpoints

### GET `/notes`
> Gets all the notes in the Database as an array

Response Payload example:
```json
{
    "count": number,
    "results": [
        {
            "_id": ObjectId,
            "text": string,
            "pinned": boolean
        },
        ...
    ]
}
```

URL Query params:<br>
`search`<br>
`pinnedOnly`

Example:
`/notes?search=comprar&pinnedOnly=true`

### GET `/notes/:id`
> Gets a single note based on the database Id

Response Payload example:
```json
{
    "_id": ObjectId,
    "text": string,
    "pinned": boolean
}
```

### POST `/notes`
> Inserts a note in the database

Request Payload example:
```json
{
    "text": string,
    "pinned": boolean
}
```

Response Payload example:
```json
{
    "_id": ObjectId,
    "text": string,
    "pinned": boolean
}
```

### PUT `/notes/:id`
> Updates a note in the database

Request Payload example:
```json
{
    "text": string,
    "pinned": boolean
}
```

Response Payload example:
```json
{
    "_id": ObjectId,
    "text": string,
    "pinned": boolean
}
```

### DELETE `/notes/:id`
> Deletes a note in the database

Response Payload example:
```json
{ }
```

### DELETE `/notes`
> Deletes all note in the database

Response Payload example:
```json
{ }
```