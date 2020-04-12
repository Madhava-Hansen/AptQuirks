json.extract! @message, :body, :user_id, :conversation_id, :read, :id, :created_at
json.created_at time_ago_in_words(@message.created_at)
