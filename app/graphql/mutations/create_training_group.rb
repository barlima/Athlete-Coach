class Mutations::CreateTrainingGroup < GraphQL::Function
  argument :name, !types.String
  # argument :training_id, types.Int
  argument :athlete_ids, types[types.Int]

  type Types::TrainingGroupType

  def call(obj, args, ctx) 
    return unless (args[:name] && args[:athlete_ids])
    return if args[:athlete_ids] == []

    athlete_ids = args[:athlete_ids]

    training_group = TrainingGroup.create(name: args[:name], trainer_id: ctx[:trainer_id])

    return unless training_group.valid?

    athlete_ids.each do |id|
      a = AthleteTrainingGroup.create(
        training_group_id: training_group.id,
        athlete_id: id
      )
    end

    OpenStruct.new({
      id: training_group.id,
      name: training_group.name,
      athlete_ids: training_group.athletes.map(&:id)
    })
  end
end