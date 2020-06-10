# Pokemon Teams!

Here you're going to help us keep track of Pokemon
trainers at Flatiron School. Through their journey,
**a Pokemon trainer can only have 6 Pokemon for their
team**. If they want to add another Pokemon, they must
release one of their Pokemon first.

![Showing how the application runs from loading, adding Pokemon to a team and also releasing one](./pokemon-teams-frontend/assets/pokemon_teams.gif)

## Requirements
- When a user loads the page, they should see all
  trainers, with their current team of Pokemon.
- Whenever a user hits `Add Pokemon` and they have
  space on their team, they should get a new Pokemon.
- Whenever a user hits `Release Pokemon` on a specific
  Pokemon team, that specific Pokemon should be released from
  the team.

## Suggested HTML
A Pokemon Card can be placed within the `<main>` tags.

### Pokemon Trainer Card
```
<div class="card" data-id="1">
  <p>Prince</p>
  <button data-trainer-id="1">Add Pokemon</button>
  <ul>
    <li>Jacey (Kakuna) <button class="release" data-pokemon-id="140">Release</button></li>
    <li>Zachariah (Ditto) <button class="release" data-pokemon-id="141">Release</button></li>
    <li>Mittie (Farfetch'd) <button class="release" data-pokemon-id="149">Release</button></li>
    <li>Rosetta (Eevee) <button class="release" data-pokemon-id="150">Release</button></li>
    <li>Rod (Beedrill) <button class="release" data-pokemon-id="151">Release</button></li>
  </ul>
</div>
```

## API
We are going to be using a Rails backend to support our requests. In order to have this working, 
you want to make sure you go to your Terminal and run the following code below:

    $ cd pokemon-teams-backend # Change into the directory
    $ bundle install           # Install the appropriate dependencies/gems
    $ rails db:migrate         # Migrate the database
    $ rails db:seed            # Seed the database
    $ rails server             # Start the server

You will want to make sure this is running in a terminal. When you're making requests you will
make it to `http://localhost:3000` as the base url. The documentation below should show you how
to utilize every API endpoint necessary to build the application.

### Getting All Trainers and their Pokemon

_**Hint:**_ Examine the response of this request carefully to understand what data is included.

```
#=> Example Request
GET /trainers

#=> Example Response
[
  {
    "id":1,
    "name":"Prince",
    "pokemons":[
      {
        "id":140,
        "nickname":"Jacey",
        "species":"Kakuna",
        "trainer_id":1
      },
      {
        "id":141,
        "nickname":"Zachariah",
        "species":"Ditto",
        "trainer_id":1
      },
      // ...
    ]
  }
  // ...
]
```

### Adding a Pokemon

_**Note:**_ Rails will take care of creating a random Pokemon for you, you don't have to send any Pokemon attributes in your POST request (e.g., name, species etc.; see `PokemonsController.rb:4`)

```
#=> Example Request
POST /pokemons

Required Headers:
{
  'Content-Type': 'application/json'
}

Required Body:
{
  "trainer_id": 1
}

#=> Example Response
{
  "id":147,
  "nickname":"Gunnar",
  "species":"Weepinbell",
  "trainer_id":1
}
```

### Releasing a Pokemon
```
#=> Example Request
DELETE /pokemons/:pokemon_id

#=> Example Response
{
  "id":147,
  "nickname":"Gunnar",
  "species":"Weepinbell",
  "trainer_id":1
}
```
