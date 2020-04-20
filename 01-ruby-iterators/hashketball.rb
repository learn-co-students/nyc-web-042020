require 'pry'


def game_hash
  {
    home: {
      team_name: "Brooklyn Nets",
      colors: ["Black", "White"],
      players: [
        { name: "Alan Anderson",
          number: 0,
          shoe: 16,
          points: 22,
          rebounds: 12,
          assists: 12,
          steals: 3,
          blocks: 1,
          slam_dunks: 1
        },
        { name: "Reggie Evans",
          number: 30,
          shoe: 14,
          points: 12,
          rebounds: 12,
          assists: 12,
          steals: 12,
          blocks: 12,
          slam_dunks: 7
        },
        { name: "Brook Lopez",
          number: 11,
          shoe: 17,
          points: 17,
          rebounds: 19,
          assists: 10,
          steals: 3,
          blocks: 1,
          slam_dunks: 15
        },
         { name: "Mason Plumlee",
          number: 1,
          shoe: 19,
          points: 26,
          rebounds: 12,
          assists: 6,
          steals: 3,
          blocks: 8,
          slam_dunks: 5
        },
        { name: "Jason Terry",
          number: 31,
          shoe: 15,
          points: 19,
          rebounds: 2,
          assists: 2,
          steals: 4,
          blocks: 11,
          slam_dunks: 1
        }
      ]
    },
    away: {
      team_name: "Charlotte Hornets",
      colors: ["Turquoise", "Purple"],
      players: [
        { name: "Jeff Adrien",
          number: 4,
          shoe: 18,
          points: 10,
          rebounds: 1,
          assists: 1,
          steals: 2,
          blocks: 7,
          slam_dunks: 2
        },
        { name: "Bismak Biyombo",
          number: 0,
          shoe: 16,
          points: 12,
          rebounds: 4,
          assists: 7,
          steals: 7,
          blocks: 15,
          slam_dunks: 10
        },
         { name: "DeSagna Diop",
          number: 2,
          shoe: 14,
          points: 24,
          rebounds: 12,
          assists: 12,
          steals: 4,
          blocks: 5,
          slam_dunks: 5
        },
        { name: "Ben Gordon",
          number: 8,
          shoe: 15,
          points: 33,
          rebounds: 3,
          assists: 2,
          steals: 1,
          blocks: 1,
          slam_dunks: 0
        },
        { name: "Brendan Haywood",
          number: 33,
          shoe: 15,
          points: 6,
          rebounds: 12,
          assists: 12,
          steals: 22,
          blocks: 5,
          slam_dunks: 12
        }
      ]
    }
  }
end
# .each
# .map
# .find
  # find the first element that matches the condition
# .select
  # all the elements that match the condition

def all_players
  # .each will return the original data 

  #   player_array = []
  # game_hash.each do |key, value|
  #   value[:players].each do |player|
  #     player_array << player
  #   end
  # end

  # map will return a new array
  game_hash.map do |key, value|
    value[:players]
    # first iteration:
      # value[:players] => home [ {}, {}, {}, {}]
    # second iteration:
      # value[:players] => away [ {}, {}, {}, {}]
  end.flatten
  # => [ [], [] ].flatten
  
  # [ [home array], [ away arra] ].flatten => [ {home player}, {h player}, {}, {}, {away players} ]
end

def find_player(name)
    # player_hash = {}
  # all_players.each do |player|
  #   if player[:name] == name
  #     player_hash = player
  #   end
  # end

    all_players.find do |player|
    player[:name] == name
  end
end

# flexible/abstract
def num_points_scored(name)
  # take the name argument
  # find the player matching that name inside of the game hash

  find_player(name)[:points]
    # iterate through game hash and find all the players
    # iterate through all the players and find the player with the name
  # return the points for that player
end

def shoe_size(name)
  find_player(name)[:shoe_size]
end

# Single Source of Truth
  # everything about a specific thing is in 1 place 
# Separation of Responsibility
  # every method and/or file has a single job 

# print num_points_scored("Bismak Biyombo")

# binding.pry


# DRY
  # Do Not Repeat Yourself