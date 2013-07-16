class CreateBlogs < ActiveRecord::Migration
  def change
    create_table :blogs do |t|
      t.string :title
      t.string :explanation
      t.string :description

      t.timestamps
    end
  end
end
