# Xhr workshop (60 minutes)

In this workshop we will build a website that allows user to search GIFs by a word or phrase by

- making HTTP GET request,

- DOM manipulation.

When the user has typed in, they should be able to trigger the API call to Giphy by pressing the *Search* button.

## Giphy API

We're going to explore the [Giphy API](http://api.giphy.com/) (is an animated GIF search engine) and learn how to read API documentation.



## Tools

The first thing we want to do is install a couple of tools to make our lives a lot easier.

[JSONView](https://chrome.google.com/webstore/detail/jsonview/chklaanhfefbnpoihckbnefhakgolnmc) is a Chrome extension that will automatically make JSON data much more readable in Chrome.

[Postman](https://www.getpostman.com/) is a Chrome app that we can use to easily make API requests. Check out the docs and install the app from [here](https://www.getpostman.com/docs/).

## Getting started

1. Clone this repo and open in your text editor.

2. Open the API Documentation and follow the **Steps**.
  You can find the API Documentation [here](https://github.com/Giphy/GiphyAPI).

## Steps

### 1. Have a look at documentation

- Find the endpoint
  
   > The endpoint is the URL where your service can be accessed by a client application.

- Check if you need an API key (if yes where to add it)

- Build your URI

- Check your response (URI) - see how your JSON looks like

  You can do this in a couple of ways: 
  
 - You can access an API in your web browser by popping the url into the address bar
 
 - You can access the API using ```curl``` by running it into you terminal
 
 - You can use [Postman]()

### 2. Open index.js  

- We will need to pass the phrase to Giphy, so we need to extract it from the input text box.

- Make a request.

If you don't remember how [here](https://github.com/lucymonie/api-workshop/blob/master/02-xmlhttprequest.md) 
is a reminder.

---

###  Use HTTP Verbs to Make Your Requests Mean Something

HTTP verbs are sent by the browser or client, and along with the URL used and data transmitted form part of the instruction to the API. There are several verbs, but in this tutorial we will be using GET. 

| Verb   | Description                    |
|:------:|:------------------------------:|
| GET    | Fetching a resource.           |
| PUT    | Updating an existing resource. |
| POST   | Create a new resource.         |
| DELETE | Delate a resource              |

### Use HTTP Response Codes to Indicate Status

As part of the response, a request gives back a status code. You can use this to identify if the request was successful or not.

| Status code  | Message        | Description                                                 |
|:------------:|:--------------:|:-----------------------------------------------------------:|
| 200          | OK             | Successful request                                          |
| 304          | Not modified   | The page has not been modified since we last retrieved data |
| 400          | Bad Request    | The server did no understand the request                    |
| 404          | Not Found      | The server could not find the requested resource            |

---

### 3. Bonus

 - Style your website (follow BEM convenction)

 - Is there a way to return more/less than 25 GIFs? If so, try to implement it!

## Solution

To see my solution checkout the `add-solution` branch.
