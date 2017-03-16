class CreateActivities < ActiveRecord::Migration[5.0]
  def change
    create_table :activities do |t|
      t.datetime :date
      t.integer :duration
      t.integer :sport_id

      t.timestamps
    end
  end
end
