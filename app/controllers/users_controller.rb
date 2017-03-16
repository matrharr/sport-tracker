class UsersController < ApplicationController


  def show
    @sports = Sport.all
    @user = User.find(params[:id])
  end

  def update
    @user = User.find(params[:id])
    sport = params['sport']
    sport_obj = Sport.find_by(name: sport)

    if @user.sports.include?(sport_obj)
      render json: { false: 'You are already following that sport!' }
    else
      @user.sports << sport_obj
      render json: { true: sport_obj }
    end

  end

end
