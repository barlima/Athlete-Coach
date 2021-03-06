class Mutations::CreateAthlete < GraphQL::Function
  argument :first_name, !types.String
  argument :last_name, !types.String
  argument :sex, !types.String
  argument :date_of_birth, !types.String

  type Types::AthleteType

  def call(obj, args, ctx) 
    return unless (args[:first_name] && 
                   args[:last_name] && 
                   args[:date_of_birth] && 
                   args[:sex])
    
    athlete = Athlete.new(
                first_name: args[:first_name],
                last_name: args[:last_name],
                sex: args[:sex],
                date_of_birth: args[:date_of_birth],
                trainer_id: ctx[:trainer_id]
              )
    
    return unless athlete.valid?
    athlete.save
    athlete
  end
end