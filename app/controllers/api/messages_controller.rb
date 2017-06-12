class Api::MessagesController < ApplicationController

  def create
    @message = Message.new(message_params)
    if @message.save
      render 'api/messages/show'
    else
      render json: @message.errors.full_messages
    end
  end

  def index
  end

  private

  def message_params
    params.require(:message).permit(:sender_id, :receiver_id, :conversation_id)
  end
end
