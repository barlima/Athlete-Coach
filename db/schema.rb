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

ActiveRecord::Schema.define(version: 2018_09_11_152402) do

  create_table "accounts", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer "sign_in_count", default: 0, null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string "current_sign_in_ip"
    t.string "last_sign_in_ip"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "name"
    t.index ["email"], name: "index_accounts_on_email", unique: true
    t.index ["reset_password_token"], name: "index_accounts_on_reset_password_token", unique: true
  end

  create_table "athlete_training_groups", force: :cascade do |t|
    t.integer "athlete_id"
    t.integer "training_group_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["athlete_id", "training_group_id"], name: "athlete_training_group"
  end

  create_table "athletes", force: :cascade do |t|
    t.integer "trainer_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "first_name"
    t.string "last_name"
    t.date "date_of_birth"
    t.string "sex"
    t.index ["trainer_id"], name: "index_athletes_on_trainer_id"
  end

  create_table "athletes_training_groups", id: false, force: :cascade do |t|
    t.integer "athlete_id", null: false
    t.integer "training_group_id", null: false
    t.index ["athlete_id", "training_group_id"], name: "index_athlete_training_group_id"
  end

  create_table "athletes_trainings", id: false, force: :cascade do |t|
    t.integer "training_id", null: false
    t.integer "athlete_id", null: false
    t.index ["athlete_id"], name: "index_athletes_trainings_on_athlete_id"
    t.index ["training_id"], name: "index_athletes_trainings_on_training_id"
  end

  create_table "groups", force: :cascade do |t|
    t.string "name"
    t.integer "account_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["account_id"], name: "index_groups_on_account_id"
  end

  create_table "professions", force: :cascade do |t|
    t.string "name"
    t.integer "athlete_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["athlete_id"], name: "index_professions_on_athlete_id"
  end

  create_table "results", force: :cascade do |t|
    t.string "value"
    t.integer "profession_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["profession_id"], name: "index_results_on_profession_id"
  end

  create_table "trainers", force: :cascade do |t|
    t.string "name"
    t.integer "group_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["group_id"], name: "index_trainers_on_group_id"
  end

  create_table "training_groups", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "training_id"
    t.index ["training_id"], name: "index_training_groups_on_training_id"
  end

  create_table "trainings", force: :cascade do |t|
    t.string "name"
    t.integer "trainer_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["trainer_id"], name: "index_trainings_on_trainer_id"
  end

end
