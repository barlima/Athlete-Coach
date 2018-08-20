Types::MutationType = GraphQL::ObjectType.define do
  name "Mutation"

  field :createAthlete, function: Mutations::CreateAthlete.new
  field :removeAthlete, function: Mutations::RemoveAthlete.new
end
