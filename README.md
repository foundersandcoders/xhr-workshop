# Xhr workshop (60 minutes)

In this workshop we will build gifs search by
A webpage that can retrieve information about a specified GitHub user

- making  HTTP GET request,

- DOM manipulation.

Here is example of gifs search that I built:

![gifs search](https://cloud.githubusercontent.com/assets/10700103/23332473/eef965fc-fb71-11e6-9e8e-d9cf090e9167.png) 

## Getting started

1. Clone this repo and open in your text editor.

2. Open index.html in your browser. You'll find a template there. Your job is to fill it with data using the Giphy API.

## Giphy API

[Giphy](http://api.giphy.com/) is an animated GIF search engine.

You can find the API Documentation [here](https://github.com/Giphy/GiphyAPI).

## Step by step

1. Retrieve gifs from API

### HTTP Verbs

HTTP verbs are sent by the browser or client, and along with the URL used and data transmitted form part of the instruction to the API. There are several verbs, but in this tutorial we will be primarily using GET. 

- GET – to fetch data
- PUT – to edit existing data
- POST – to add the new data
- DELETE – to delete data

### Status code

As part of the response, a request gives back a status code. You can use this to identify if the request was successful or not.

| Status code  | Message        | Description                                                 |
|:------------:|:--------------:|:-----------------------------------------------------------:|
| 200          | OK             | Successful request                                          |
| 304          | Not modified   | The page has not been modified since we last retrieved data |
| 400          | Bad Request    | The server did no understand the request                    |
| 404          | Not Found      | The server could not find the requested resource            |
