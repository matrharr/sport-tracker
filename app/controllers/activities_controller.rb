class ActivitiesController < ApplicationController


  def create
    @activity = Activity.new(date: Time.now, duration: params[:duration].to_i, sport_id: Sport.find_by(name: params['sport']).id)

    if @activity.save
      render json: {true: @activity}
    else
      render json: {false: @activity.errors}
    end
  end

end
