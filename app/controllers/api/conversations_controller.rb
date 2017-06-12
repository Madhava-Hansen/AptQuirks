class Api::ConversationsController < ApplicationController

  def create
    @conversation = Conversation.new(conversation_params)
    if @conversation.save
      render 'api/conversations/show'
    else
      render json: @conversation.errors.full_messages
    end
  end

  def index
  end

  def show
  end

  private

  def conversation_params
    params.require(:conversation).permit(:user_one, :user_two)
  end
end
