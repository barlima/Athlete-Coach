class Mutations::CreateTrainingGroups < GraphQL::Function
  argument :groups, types[Inputs::TrainingGroupInput]

  type types.Boolean

  def call(obj, args, ctx) 
    return unless (args[:groups])

    args[:groups].each do |group|
      training_group = TrainingGroup.new(name: group.name, trainer_id: ctx[:trainer_id])
      
      if training_group.valid? 
        training_group.save 
      else
        return false
      end

      group.athlete_ids.each do |id|
        AthleteTrainingGroup.create(
          training_group_id: training_group.id,
          athlete_id: id
        )
      end

      true
    end
  end
end