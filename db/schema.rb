# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20200629213514) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "apartments", force: :cascade do |t|
    t.string   "street_address", null: false
    t.datetime "created_at",     null: false
    t.datetime "updated_at",     null: false
    t.float    "longitude",      null: false
    t.float    "latitude",       null: false
    t.index ["street_address"], name: "index_apartments_on_street_address", using: :btree
  end

  create_table "conversations", force: :cascade do |t|
    t.integer  "sender_id",          null: false
    t.integer  "receiver_id",        null: false
    t.datetime "created_at",         null: false
    t.datetime "updated_at",         null: false
    t.string   "receiver_username"
    t.string   "receiver_image_url"
    t.string   "sender_username"
    t.index ["receiver_id"], name: "index_conversations_on_receiver_id", using: :btree
    t.index ["sender_id"], name: "index_conversations_on_sender_id", using: :btree
  end

  create_table "images", force: :cascade do |t|
    t.string   "url",           null: false
    t.string   "thumbnail_url", null: false
    t.integer  "user_id",       null: false
    t.integer  "apartment_id",  null: false
    t.datetime "created_at",    null: false
    t.datetime "updated_at",    null: false
  end

  create_table "likes", force: :cascade do |t|
    t.integer  "user_id",      null: false
    t.integer  "apartment_id", null: false
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
    t.string   "status"
    t.index ["apartment_id"], name: "index_likes_on_apartment_id", using: :btree
    t.index ["user_id"], name: "index_likes_on_user_id", using: :btree
  end

  create_table "messages", force: :cascade do |t|
    t.integer  "conversation_id", null: false
    t.text     "body",            null: false
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
    t.integer  "user_id",         null: false
    t.string   "read",            null: false
  end

  create_table "quirks", force: :cascade do |t|
    t.string   "title",        null: false
    t.string   "body",         null: false
    t.integer  "apartment_id", null: false
    t.integer  "user_id",      null: false
    t.string   "apt_number"
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
    t.string   "user_name"
    t.string   "user_pic"
    t.integer  "star_rating"
    t.index ["apartment_id"], name: "index_quirks_on_apartment_id", using: :btree
    t.index ["user_id"], name: "index_quirks_on_user_id", using: :btree
  end

  create_table "users", force: :cascade do |t|
    t.string   "username",        null: false
    t.string   "password_digest", null: false
    t.string   "session_token",   null: false
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
    t.string   "url"
    t.string   "thumbnail_url"
    t.string   "city"
    t.integer  "receiver_id"
    t.integer  "sender_id"
    t.string   "email"
    t.index ["username"], name: "index_users_on_username", using: :btree
  end

end
