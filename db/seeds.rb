# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

sports = Sport.create([{name: 'Tennis'}, 
  {name: 'Baseball'}, 
  {name: 'Hockey'}])

activities = Activity.create([{date: Time.now, duration: 90, sport: sports[0]},
  {date: rand(1.years).seconds.ago, duration: 30, sport: sports[1]}])

teams = Team.create([{name: 'Webb Masters', sport_id: sports.first.id}, 
  {name: 'Gigantes', sport_id: sports[1].id}])

u = User.create(first_name: 'Matt',last_name: 'Harris', height: 71, email: 'matt@gmail.com', weight: 170, teams: teams,activities: activities)





