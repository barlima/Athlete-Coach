Types::TrainingGroupType = GraphQL::ObjectType.define do
  name "TrainingGroup"

  field :id, !types.ID
  field :name, !types.String
  field :athlete_ids, types[types.Int]
end
