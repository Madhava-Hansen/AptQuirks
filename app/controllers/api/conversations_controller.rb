class Api::ConversationsController < ApplicationController

  def create
    if Conversation.with(params[:conversation][:receiver_id], params[:conversation][:sender_id]).present?
      @conversation = Conversation.with(params[:conversation][:sender_id], params[:conversation][:receiver_id]).first
    else
    @conversation = Conversation.create!(conversation_params)
    end
    if @conversation
      receiver_id = current_user.id == conversation_params[:receiver_id] ?
       conversation_params[:sender_id] : conversation_params[:receiver_id]
      @receiver = User.find(receiver_id)
      render 'api/conversations/show'
    else
      render json: @conversation.errors.full_messages
    end
  end

  def index
    @user = current_user
    if @user
      @conversations = Conversation.where("sender_id = ? OR receiver_id = ?", @user.id, @user.id)
      render 'api/conversations/index'
    else
      render json: ["couldn't find conversations"], status: 404
    end
  end

  def show
    @conversation = Conversation.find(params[:id])
    if @conversation
      render 'api/conversations/show'
    else
      render json: @conversation.errors.full_messages
    end
  end

  def destroy
    @conversation = Conversation.find(params[:conversation][:id])
    if @conversation
      @conversation.destroy!
      render 'api/conversations/show'
    else
      @errors = @conversation.errors.full_messages
      render 'api/conversations/errors'
    end
  end

  private

  def conversation_params
    params.require(:conversation).permit(:receiver_id, :sender_id, :receiver_username, :sender_username, :receiver_image_url, :id)
  end
end
