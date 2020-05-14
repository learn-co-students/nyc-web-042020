# Sinatra Relationships
===

## SWBATs
- Use ActiveRecord association methods on models in a Sinatra application
- Create multiple controllers to handle multiple RESTful resources
- Use ActiveRecord associations to look up information in a view file
- Use the `<select>` tag to display a dropdown menu

### Outline
- [ ] Add a second model to our domain

Movie -< Review



- [ ] Come up with user stories for our application and see how they can be solved with REST

as a user....
I can view all the Reviews for one Movie on the show page
I can create new Review

- [ ] List the instances related model on the show page for the class that `has_many` of the other class
- [ ] Create the `new` and `create` routes for the other model (with `belongs_to`)

### Corneal Generators

In addition to being a great tool to generate a new Sinatra app from scratch, the `corneal` gem also has some additional functionality to make it easier to create models, views and controllers following MVC and RESTful conventions. 

For instance, to create a new `movie` model, you can run the following from inside your app directory:

```
$ corneal model movie title:string runtime:integer
```

This will generate a migration file for the model with the attributes you specify, as well as creating a class in your `app/models` folder that inherits from ActiveRecord.

You can also use corneal to generate controllers and views:

```
$ corneal controller movies
```

This will generate a `movies_controller` file with the 7 RESTful routes, and their corresponding view files for the `index`, `new`, `show` and `edit` routes. It also updates your `config.ru` file to use the newly created controller.

More info: [Corneal Documentation](https://github.com/thebrianemory/corneal)


### Controllers in Sinatra

Once our application starts to get more complex and we have multiple models that we'd like to create views for, we need to start separating our logic out to multiple controller files. This will keep our `ApplicationController` from getting to big and will help us separate out the routing logic based on RESTful conventions for each of our models. 

First, we need to create a new controller file for each of our models. Controller names should be _plural_, since route names are all plural:

_app/controllers/movies_controller.rb_
```rb
  class MoviesController < ApplicationController
    # movie routes here!
  end
```

All our new controllers should inherit from our `ApplicationController` instead of inheriting directly from `Sinatra::Base` directly. That way we can set up any configuration that applies to all controllers in one place - the ApplicationController.

We also need to configure our application to use this new controller in the `config.ru` file:

```rb
  
run ApplicationController
use MoviesController # can go before or after run ApplicationController
```

Finally, we'll also need to create a new folder for all the view files for this particular model. Then our controller can refer to these view files using the folder name + the file name - this keeps them separate from view files pertaining to other models in our application:

```rb
  class MoviesController < ApplicationController
    
    get '/movies' do
      erb :"movies/index"
    end
  end
```

