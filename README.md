# Xhr workshop (60 minutes)

In this workshop we will build a small web app that allows users to search for GIFs by a word or phrase. We will use:
- an HTTP GET request
- DOM manipulation.

When the user has typed in a word or phrase they should be able to trigger the API call to Giphy by pressing the *Search* button.

## Giphy API

We're going to explore the [Giphy API](http://api.giphy.com/) (Giphy is an animated GIF search engine) and learn how to read API documentation.



## Tools

The first thing we want to do is install a couple of tools to make our lives a lot easier.

[JSONView](https://chrome.google.com/webstore/detail/jsonview/chklaanhfefbnpoihckbnefhakgolnmc) is a Chrome extension that will automatically make JSON data much more readable in Chrome.

[Postman](https://www.getpostman.com/) is a Chrome app that we can use to easily make API requests. Check out the docs and install the app from [here](https://www.getpostman.com/docs/).

[prettyjson](https://www.npmjs.com/package/prettyjson) - run in your terminal `npm install -g prettyjson`

## Getting started

1. Clone this repo and open it in your text editor.

2. Open the API Documentation and follow the **Steps**.

You can find the API Documentation [here](https://github.com/Giphy/GiphyAPI).

## Steps

### 1. Have a look at documentation

- Find the endpoint we need
  
   > The endpoint is the URL that can be reached by client-side applications
   
- Check if you need an API key (if yes where to add it)

- Build your URL

- Check your response (via the URL) - see what your JSON looks like

  You can do this in a couple of ways: 
  
 - You can access an API in your web browser by popping the url into the address bar
 
 - You can access the API using ```curl``` by running it in your terminal
   `curl "your-url-here" | prettyjson`
 
 - You can use [Postman](https://www.getpostman.com/docs/)

### 2. Open index.js  

- We will need to pass the phrase to Giphy, so we need to extract it from the input text box.

- Make a request to Giphy with the user input as your search paramater

If you don't remember how [here](https://github.com/lucymonie/api-workshop/blob/master/02-xmlhttprequest.md) 
is a reminder.

### 3. Bonus

 - Style your website (follow BEM conventions)

 - Is there a way to return more/less GIFs? If so, try to implement it!

## Solution

To see my solution check out the `add-solution` branch.
