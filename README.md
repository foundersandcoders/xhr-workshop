# Xhr workshop (60 minutes)

In this workshop we will build gifs search by

- making HTTP GET request,

- DOM manipulation.

Here is example of gifs search that I built:

![gifs search](https://cloud.githubusercontent.com/assets/10700103/23332473/eef965fc-fb71-11e6-9e8e-d9cf090e9167.png) 

## Getting started

1. Clone this repo and open in your text editor.

2. Open the API Documentation. You can find it [here](https://github.com/Giphy/GiphyAPI)

## Giphy API

[Giphy](http://api.giphy.com/) is an animated GIF search engine.

You can find the API Documentation [here](https://github.com/Giphy/GiphyAPI).

## Steps

1. Have a look at documentation

- Check if you need an API key (if yes where to add it)

- Find the endpoint

- Check your response - see how your JSON looks like

  You can do this in a couple of ways: 
  
 - You can access an API in your web browser by popping the url into the address bar
 
 - You can access the API using ```curl``` by running it into you terminal
 
 - You can use [Postman]()

2. Open index.html in your browser

- As you can see, there is a box to type in a searching phrase and a *Search* button.  
  When the user has typed in the phrase, they should be able to trigger the API call to Giphy by pressing the *Search*         button.

3. Open index.js  

- We will need to pass the phrase to Giphy, so we need to extract it from the input text box.

- Make a request.

4. Bonus

  - style your website (follow BEM convenction)

  - is there a way to return more/less than 25 gifs? If so try to implement it!


### HTTP Verbs

HTTP verbs are sent by the browser or client, and along with the URL used and data transmitted form part of the instruction to the API. There are several verbs, but in this tutorial we will be using GET. 

| Verb   | Description                    |
|:------:|:------------------------------:|
| GET    | Fetching a resource.           |
| PUT    | Updating an existing resource. |
| POST   | Create a new resource.         |
| DELETE | Delate a resource              |

### Status code

As part of the response, a request gives back a status code. You can use this to identify if the request was successful or not.

| Status code  | Message        | Description                                                 |
|:------------:|:--------------:|:-----------------------------------------------------------:|
| 200          | OK             | Successful request                                          |
| 304          | Not modified   | The page has not been modified since we last retrieved data |
| 400          | Bad Request    | The server did no understand the request                    |
| 404          | Not Found      | The server could not find the requested resource            |
