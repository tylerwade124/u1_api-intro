# AJAX and APIs

## Learning Objectives

- Explain what an API is and how to use one
- Describe AJAX and how it lets us build rich client-side applications
- Render new HTML content using data loaded from an AJAX request.
- Perform GET requests to an API to retrieve data.
- Installing and setting up Postman App to aid in API functinons

## Framing (5 minutes, 0:05)

Over the past few weeks we've learned how to build our own websites, using a
variety of technologies. But the content on these sites has been limited to
whatever we type into the html directly. What if there were another way? (there
is)

Today, we're going to learn how to request information from third-party
databases, and how to make our applications more dynamic by making it so our
application doesn't need to refresh the page to make a request to an API server!

With these functions we will be able to access information from all over the web and display it within our apps, sites, and projects!

## What is an API (15 minutes, 0:30)

**API** stands for "Application Programming Interface" and is a way of
describing software design. At the highest level, an API is any application with
a set of instructions for how programmers can interact with it (e.g., getting data). The DOM is
actually an example of an API.

Many web sites have their own data, but they can pull in other data. For example, many news sites have a weather widget. This widget gets its data from a weather resource. There are many APIs that can be used by individuals and companies. Some are totally free (Pokemon, Harry Potter, Weather), some are available for a small fee (Spotify, the Joke DB), and some are really expensive (super super ultra fast Stock Market + Currency Exchange DB's).

There are APIs for
- Weather
- Stocks
- Beer
- Dictionaries
- Books
- Sports
- Art
- Games
- Movies

Here is a good list of [Free Apis](https://github.com/toddmotto/public-apis)


### API Data

An API will receive a scripted request and send a response. But what makes an
API different from a full-stack application, is that an API won't render views,
it'll just send back data. That data will generally be in one of two forms: XML
or JSON.


#### JSON

All data sent via HTTP is sent as strings. However, what we really want to
pass between web applications is **structured data** (i.e., arrays and objects).
In order to do so, native data structures are **serialized**: converted from a
javascript object into a string representation of the data (aka serialization), 
called **JSON** which stands for "JavaScript Object Notation". This string can 
be transmitted and then parsed back into data (de-serialized).

**JSON** has become a universal
standard for sending and receiving data across the web. It is light-weight,
easy-to-read and quick to parse.

JSON is just a long string of characters. It is based off the JavaScript Object syntax. 
One notable difference is that double quotes must always be used for keys and values.

JSON looks like this:

```json
{
  "users": [{ "name": "Bob", "id": 23 }, { "name": "Tim", "id": 72 }],
  "content": "This is a piece of content"
}
```


### We Do: Working with an API

APIs can be either public or private. If an API is public, anyone can access the
data behind it. If an API is private, then you'll need to get a password (called
an API Key) or go through some other form of authorization before you can access
data through that API.

We'll start by exploring a public API: [PokéApi](https://pokeapi.co/)

#### We do: PokéApi (10 minutes, 0:40)

> 10 minutes

For the next 10 minutes, explore the PokéApi. Try the links out in the browser
as well as on the pokeapi page.

> In order to format JSON in the browser nicely, you might need a plugin like
> Chrome's
> [JSON View](https://chrome.google.com/webstore/detail/jsonview/chklaanhfefbnpoihckbnefhakgolnmc).

1. How do you get data for all Pokemon?
1. What about for a specific Pokemon?
1. How do you get data about a specific ability?
1. How do you get data about a specific location?
1. What type of request is being made when you open a url in the browser?

### We Do: Lets see it in Action

We will use Javascript's `fetch()` method to make AJAX calls to an API. There
are several standard requests we can make, including GET, POST, PUT, PATCH and
DELETE. Today, we're only going to be making GET requests.

Let's setup a mini page to make requests from.

- Make a new folder called `js-pokeapi-ajax` in your sandbox.
- Create an `index.html` and a `script.js` file. Link your script in your html
  file.
- Use Live Server to open up the `index.html` page.

Add the following code to your script! Then open your index.html file in the
browser **using Live Server**. Don't open it using the `open` command or the
requests will be blocked.

"Then" is a pre-defined method used with Async functions, what they basically mean is "If (something happens correctly), Then (it will do something). Remember, this is Asyncronous, so things are happening at different times behind the scenes!

"Catch" is used to "Catch" any errors that the API call may throw at you. It is used to give a message if (and inevitably when) any errors occur.


```js
const url = "https://pokeapi.co/api/v2/pokemon-form/"

fetch(url)
  .then(res => {
    console.log("success!", res);
  })
  .catch(err => {
    console.log("something went wrong...", err);
  });
```

Every AJAX request needs a URL (where we're making our request to), the type (or
method) of our request and any headers that get sent with our request. Sometimes
the headers are used to tell the server we're requesting data from to give us a
certain format of data back (JSON or XML).

The default type or request fetch makes is a GET request. We can also squeak by
with the default headers (in this case, we're not passing any) for our GET
request because PokeAPI is not strict in what it asks from us.

Open your browser console and you should see the response getting logged!

Now check out the network tab and you'll see something like this:

![requests-1](./assets/network-tab-1.png)

This is a list of all the requests your browser has made since loading this
page. Click on any of them to see details.

The very first one is the html document itself. Loading that document will
trigger other requests, like a script or a css file or any images the document
might contain.

Now click on the one that says `7`, this is the AJAX request to pokeapi:

![requests-1](./assets/network-tab-2.png)

You can see the request and response headers. All of this data is sent with
every request!

### Aside: Promises & Asynchronous JS (10 minutes, 1:05)

An AJAX request is asynchronous: we'll make our request to the server and some
time later will get our response. In the meantime, the rest of our code will
keep running. We need some way to handle it when it's finished. We've previously
handled asynchronous actions by using callbacks. The `.fetch()` method uses
Promises.

Asynchronous also means that things won't run in the order that you expect them
to. Here's an example:

```js
console.log(1);

fetch(url).then(res => {
  if (res.ok) {
    console.log(2);
  }
});

console.log(3);
```

Try it! You might be surprised that you'll see 1, 3, 2 in the console.

You'll notice there are 2 functions _chained_ onto the AJAX call. These are our
**promise methods**. Promises are callbacks that may or may not happen. A
promise represents the _future result_ of an asynchronous operation. It's how we
handle the return value of our `fetch` request.

- `.then()` - this code is run if the Promise is fulfilled
- `.catch()` - this code is run if the Promise is rejected
- `.finally()` - this code is always run, fulfilled or not

Note that .then() will be called even if we get a 404 or some other error code
from our requested url. This is because the response back is still considered a
fulfilled promise. The response will however include a property `ok: false`
which you can use to control the flow of your code.

Ex:

```js
fetch(url).then(res => {
  if (res.ok) {
    console.log("celebrate!");
  }
});
```

### The API Response

But how do we access the JSON object we saw in the browser before? If we use
`.then()` we can log out information about the response of the page. However, we
can't do much with the body of the data yet. Luckily, our response has a
`.json()` method that can be called which will turn our response into json.

Let's change our `script.js` file to incorporate this.

```js
fetch(url)
  .then(res => {
    return res.json();
  })
  .then(res => {
    console.log("success!", res);
  })
  .catch(err => {
    console.log("something went wrong...", err);
  });
```

What we have above is an example of chaining. You are almost guaranteed to have
to work with chaining when dealing with AJAX or Promises. I like to short-hand
the above code to something like this...

```js
fetch(url)
  .then(res => res.json())
  .then(res => console.log("success!", res))
  .catch(err => console.log("something went wrong...", err));
```

We can then dig through this response just like any other JS object to pull up
the information we want.

```js
.then(res => console.log(res.name))
```

## We Do: DOM Manipulation Using Response Data (15 minutes, 1:20)

### But first, let's learn how build up a working searchbar!

Here is the basic HTML code for a search bar and button
```
<form id = "searchBar">
    <input type="text" name="inputBar" value="" placeholder="Enter text here"  id="inputBar">
    <input type="button" name = "submitButton" value="Click here" id="searchButton">
</form>

 
```

And here is some of the JS we will need to make it all run
```
let button = document.querySelector('#searchButton');
let textInput = document.querySelector('#inputBar').value;


async function getData (event) {    
     event.preventDefault()

 ///FETCH code

}
```

Before we begin, how are we going to get that Button to run the getData function when it is clicked??
1. Add a form and a `<h1>` to your HTML. Your form should include a single text
   input and a submit button.
1. Add an event listener to your form so that when submitted, you trigger an
   AJAX call to the PokéAPI to find the Pokemon with the value from the text
   input field in the form. So if you type `52` in the input, search for the
   pokemon with the ID of `52`.
1. Inside your `.then()` promise callback, handle the response and set the text
   of your `<h1>` to be the **name** of the Pokemon the user searched for.

> Hint: What does `.preventDefault()` do? Bonus: include an `img` tag to your
> html and have a picture of the pokemon you search for appear on your page!


There are A Lot of different key parts to this, from pulling the information, to logging it on to the screen.
At the end, your code should look something like this:

```

const pokemonHeading = document.querySelector('#my-pokemon-heading');
			pokemonHeading.innerText = `Pokemon: ${res.name.toUpperCase()}`;
			console.log(res);
      
```      
      




## Break (10 minutes, 1:30)

## You do: More requests / DOM Manipulation Practice

Using the API docs as reference, let's explore outputting a list of items.

We can use the base url of any of the resources, like `/berry/` or `/pokemon/`
to get a list of that item. The API only returns 20 at a time, which is fine for
our purposes.

Let's use that info plus our knowledge of DOM methods to make a list of berry
names.

- Get the list of berries from the API
- Loop through the list of berries, making an HTML element from each
- Append the HTML element to the DOM in an `li` tag

## You do: Add urls to each element

Using the previous logic, what would we need to change to add the `url` property
from the berries results to the DOM?

---

## Bonus

### API Keys



[Read More](./apiKeysExercise.md)

### Fetch & XMLHttpRequest

[Read More](./fetch-xml.md)
