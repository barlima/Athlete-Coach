Types::AthleteType = GraphQL::ObjectType.define do
  name "Athlete"

  field :id, !types.ID
  field :first_name, !types.String
  field :last_name, !types.String
  field :sex, !types.String
  field :date_of_birth, !types.String
end
