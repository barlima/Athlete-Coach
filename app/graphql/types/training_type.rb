Types::TrainingType = GraphQL::ObjectType.define do
  name "Training"

  field :id, !types.ID
  field :name, !types.String
  field :training_param, !types.String
  field :training_groups, !types[Types::TrainingGroupType]
end
