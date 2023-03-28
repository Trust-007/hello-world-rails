class Api::V1::GreetingsController < ApplicationController
  def index
    if Greeting.all.empty?
      render json: { message: 'No greeting found' }, status: :not_found
    else
      random = rand(1..5)
      greeting = Greeting.find(random)
      render json: {
        message: greeting.message
      }, status: :ok
    end
  end
end
