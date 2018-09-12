Inputs::TrainingGroupInput = GraphQL::InputObjectType.define do 
  name "TrainingGroupInput"

  argument :name, !types.String
  argument :athlete_ids, types[types.Int]
end