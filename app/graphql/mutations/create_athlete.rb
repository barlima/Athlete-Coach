class Mutations::CreateAthlete < GraphQL::Function
  argument :first_name, !types.String
  argument :last_name, !types.String
  argument :date_of_birth, !types.String
  argument :trainer_id, !types.ID

  type Types::AthleteType

  def call(obj, args, ctx) 
    return unless (args[:first_name] && args[:last_name] && args[:date_of_birth] && args[:trainer_id])
    
    athlete = Athlete.new(
                first_name: args[:first_name],
                last_name: args[:last_name],
                date_of_birth: args[:date_of_birth],
                trainer_id: args[:trainer_id]
              )
    
    return unless athlete.valid?
    athlete.save
    athlete
  end
end