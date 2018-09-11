Inputs::AthleteInput = GraphQL::InputObjectType.define do 
  name "AthleteInput"

  argument :id, !types.Int
end