class Api::MessagesController < ApplicationController

  def create
    @message = Message.new(message_params)
    if @message.save
      render 'api/messages/show'
    else
      render json: @message.errors.full_messages, status: 500
    end
  end

  def index
    @conversation = Conversation.find(message_params[:conversation_id])
    @messages = @conversation.messages
    if @messages
      render 'api/messages/index'
    else render json: @messages.errors.full_messages, status: 404
    end
  end

  private

  def message_params
    params.require(:message).permit(:user_id, :conversation_id, :body, :read)
  end
end
