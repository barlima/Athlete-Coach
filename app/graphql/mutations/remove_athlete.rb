class Mutations::RemoveAthlete < GraphQL::Function
  argument :id, !types.ID

  type Types::AthleteType

  def call(obj, args, ctx) 
    athlete = Athlete.find_by(id: args[:id])
    return unless athlete
    athlete.destroy
  end
end