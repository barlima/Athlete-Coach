Types::QueryType = GraphQL::ObjectType.define do
  name "Query"

  field :all_athletes, !types[Types::AthleteType] do
    resolve -> (obj, args, ctx) { Athlete.all }
  end

  field :athlete, Types::AthleteType do
    argument :id, !types.ID
    resolve -> (obj, args, ctx) {
      Athlete.find_by(id: args[:id])
    }
  end

  field :athletes, !types[Types::AthleteType] do
    # argument :trainer_id, types.ID
    resolve -> (obj, args, ctx) {
      Athlete.where(trainer_id: ctx[:trainer_id]).order(created_at: :desc)
    }
  end

  field :training, Types::TrainingType do
    argument :training_param, !types.String
    resolve -> (obj, args, ctx) {
      training = Training.find_by(training_param: args[:training_param])
      training if (training && training.trainer_id == ctx[:trainer_id])
    }
  end
end
