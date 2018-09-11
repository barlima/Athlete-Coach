class Mutations::SetTrainingName < GraphQL::Function
  argument :id, !types.ID
  argument :name, !types.String

  # ToDo: Return TrainingType
  type types.String

  def call(obj, args, ctx) 
    return unless (args[:id] && args[:name])

    training = Training.find_by_id(args[:id])
    training.update_attribute(:name, args[:name])

    training.name
  end
end