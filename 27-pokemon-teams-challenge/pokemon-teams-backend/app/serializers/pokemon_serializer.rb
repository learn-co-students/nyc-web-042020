class PokemonSerializer < ActiveModel::Serializer
  attributes :id, :nickname, :species, :trainer_id
end
