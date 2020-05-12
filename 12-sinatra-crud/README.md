# Sinatra CRUD & REST 
===

## SWBATs
- Make a CRUD app using Sinatra
- Explain REST
- Demonstrate how REST is used with CRUD
- Configure forms to work with HTTP verbs other than GET and POST
- Know how to write the following HTML tags: <a>, <form>, <input>
- Use nested params to isolate params coming from form fields
- Understand the difference between rendering and redirecting, and when to use one strategy or the other
- Render a delete button

## Outline
- Review our app
  - READ
  - Add some links
- Part 1: CREATE
  - Forms
  - 2 Routes? 
  - Params - Mass Assignment
- Part 1: UPDATE
  - Update form
  - Method override
  - Nested params
- Part 2: Delete
  - Delete button
  
  movies

### REST & CRUD
- [ ] Create
  - [ ] GET '/movies/new' -> Show the user a form to create a new doctor
  - [ ] POST '/movies' -> Create a new doctor in our database
- [ ] Read
  - [ ] GET '/movies' -> Show all movies
  - [ ] GET '/movies/:id' -> Show one doctor
- [ ] Update
  - [ ] GET '/movies/:id/edit' -> Show the user a form to edit an existing doctor doctor
  - [ ] PATCH '/movies/:id' -> Update the doctor in our database
- [ ] Delete
  - [ ] DELETE '/movies/:id' -> Delete the doctor from our database

### Forms (CREATE)

So far, we've only given our user one way to interact with our website: by visiting a specific URL for a resource (`/movies` or `/movies/:id`). Forms are another way for users to interact with our application, and they give our users a nice interface to input specific kinds of data (text, numbers, etc). We'll typically use forms for the Create and Update parts of CRUD, but you might also come across forms in other contexts (like search forms).

To start, we'll need to set up a route in our controller to display a form:

```rb
  get '/movies/new' do
    erb :new
  end
```

In our `new.erb` file, we can generate the HTML for a form that will let a user create a new instance of a movie in our application:

```html
<form method="POST" action="/movies">
  <label for="title">Title</label>
  <input type="text" name="title" />
  <label for="runtime">Runtime</label>
  <input type="number" name="runtime" />
  <input type="sbumit" />
</form>
```

When we click SUBMIT to submit the form, the browser will send a request to the server. The HTTP verb for the request comes from the form's `method` attribute, and the path for the request comes from the `action` attribute.

Once the form is submitted, we need a place in our controller receive the request and do something with the user's data. All the information filled in by the user in our form will be available in the `params` hash as key/value pairs. The keys will match with the `name` attributes on our input fields, and the values will be whatever the user put in before submitting the form.

```rb
  post "/movie" do
    movie = Movie.create(title: params[:title], runtime: params[:runtime])
  end
```

Since ActiveRecord's create method accepts a hash as an argument, and our `params` is a hash, we can also use mass assingment to make our code a little cleaner:

```rb
  post "/movie" do
    movie = Movie.create(params)
  end
```

After the form is submitted and we've created an instance of a movie in our database, we still have one step left! The server is still responsible for sending some kind of response back to the client. Ideally, we'd like to take the user to the SHOW page for their newly created movie instance. We could just render the show view...

```rb
  post "/movie" do
    @movie = Movie.create(params)
    render :show
  end
```

But this isn't following restful convention! What if our show route had some additional logic in it? We'd have to recreate that logic in the create route as well, and then we're adding additional redundant code to our project. The better solution is to redirect the user to the show route. This will send an additional request to the server, which will hit our show route and run all the logic in that controller action:

```rb
  post "/movie" do
    movie = Movie.create(params)
    redirect to "/movies/#{movie.id}" # make another GET request to /movies/1
  end
```


### Forms (PATCH)

In the last lecture, we saw that we can use forms to make two kinds of HTTP requests, `GET` and `POST`, by changing the form's `method` attribute:

```html
<form method="post" action="/movies">
  <!--form fields here-->
</form>
```

We know based on RESTful convention that in order to update or delete something in our application, we need to use other HTTP verbs: `PUT` or `PATCH` for updating, and `DELETE` for deleting. 

Unfortunately, [HTML forms don't support any methods other than GET or POST](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form#attr-method). In order to get around this, Sinatra (and other frameworks that follow RESTful conventions) use a special hidden field on the form that changes the HTTP verb in the server before it reaches our controller. This is commonly referred to as the *method override*. It looks like this in the form:

```html
<form method="post" action="/movies/:id">
  <input type="hidden" name="_method" value="put">
  <!--form fields here-->
</form>
```

We also need to add one additional line of configuration to tell Sinatra to look for this special `_method` key in the params hash, and use its value to change the HTTP verb for the request. You can **either** set this up in the ApplicationController, or the `config.ru` file (no need to to both!):


```rb
# in config.ru

use Rack::MethodOverride # this will tell our application to look for the _method key in params
run ApplicationController

```

--OR--

```rb
# in application_controller.rb
class ApplicationController < Sinatra::Base

  configure do
    set :public_folder, 'public'
    set :views, 'app/views'
    set :method_override, true # this will tell our application to look for the _method key in params
  end

  # route etc
  # ...

end
```

### Working with Nested Params

Consider the following HTML form:

```erb
<h1>Edit <%= @movie.title %></h1>
<form method="POST" action="/movies/<%= @movie.id %>">
  <input type="hidden" name="_method" value="put">
  <input type="text" name="title" value="<%= @movie.title %>">
  <input type="number" name="runtime" value="<%= @movie.runtime %>">
  <input type="submit">
</form>
```

When this form is submitted, we'll need a few pieces of information in order to find and update a movie in our database: 
- The movie's ID
- Any fields from the form to update specific attributes for the movie

Currently, when the form is submitted, all of the information we need is grouped together in the params hash:

```rb
  params = {
    "_method"=>"put",
    "title"=>"The Star Wars",
    "runtime"=>"900",
    "id"=>"1"
  }
```
Ideally, we'd like to keep the information separate so we can (1) find the film, then (2) use mass assignment to update the movie using all the fields from the form. Something like the example below - with all our form fields _nested_ in their own key in the params hash - would be great:

```rb
  params = {
    "_method"=>"put",
    "id"=>"1",
    "movie" => {
      "title"=>"The Star Wars",
      "runtime"=>"900"
    }
  }
```

In order to get our params hash looking the way we want it, we need to update the `name` attributes for our form's input fields:

```erb
<h1>Edit <%= @movie.title %></h1>
<form method="POST" action="/movies/<%= @movie.id %>">
  <input type="hidden" name="_method" value="put">
  <input type="text" name="movie[title]" value="<%= @movie.title %>">
  <input type="number" name="movie[runtime]" value="<%= @movie.runtime %>">
  <input type="submit">
</form>
```

With our new changes to the form, the params will come out exactly as we need them, and we can update our route like so:

```rb
  put '/movies/:id' do
    movie = Movie.find(params[:id])
    movie.update(params[:movie]) # nested params hash
    redirect to "/movies/#{movie.id}"
  end
```

### Deleting

In order to delete a resource, following RESTful routing conventions, we'll need to send a `DELETE` request to the server. We can use the same technique as we did for editing a resource and use a form with a special method override field to send the request:

```erb
<form method="POST" action="/movies/<%= @movie.id %>">
  <input type="hidden" name="_method" value="DELETE">
  <input type="submit" value="Delete">
</form>
```

In our controller, we can then handle this delete request with a route that include the resource's id:

```rb
  delete '/movies/:id' do
    # model
    movie = Movie.find(params[:id])
    movie.destroy

    # response
    redirect "/movies"
  end
```

### HTML 101

Here are a few important HTML tags and how they work. For a deeper dive into HTML, check out the [Mozilla Developer Network docs](https://developer.mozilla.org/en-US/docs/Web/HTML).

- Anchor Tag (`<a>`)
  - used to create links in our website
  - needs a `href` attribute to say what URL to request when a user clicks the link
  - when a user clicks a link, the browser sends a GET request to the URL specified in the `href` attribute
  - `<a href="/movies">Movies</a>`

- List Tags (`<ul>`, `<ol>`, `<li>`)
  - used to represent lists of information
  - `ul`: Unordered List, `ol`: Ordered list (numbered)
  - both `ul` and `ol` tags are used to contain `li` (list item) tags

```html
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>
```

- Input Tag (`<input>`)
  - used in conjunction with form tags to give the user a place to enter information
  - important attributes:
    - `name`: the name of the field, will be used on the server as part of the params hash
    - `type`: what kind of data this input field should be used for (text, number, password, etc)
    - `value`: what the INITIAL value of this input field is (useful for edit forms)
    - `placeholder`: text to display to the user before they input a value

- Form Tag (`<form>`)
  - used to give our users an interface to send information to our server
  - all forms must have a `method` attribute to specify the HTTP verb, and an `action` attribute to specify the URL -> this is how the browser knows what kind of request to make when the form is submitted
  - all forms must have a `submit` tag: `<input type="submit" />`, this will render a button to let the user submit the form after they've filled it out
  - forms can have other input fields: `<input type="text" />`, `<input type="number" />`, `<select>`...
  
```html
<form method="POST" action="/movies">
  <input type="text" name="title" placeholder="What's the title?" />
  <input type="number" name="runtime" placeholder="How long is it?" />
  <input type="sbumit" />
</form>
```