class UserFoodSerializer < ActiveModel::Serializer
  attributes :id
  belongs_to :food
end
