
exports.up = function(knex) {
  return knex.schema.createTable('recipes', tbl =>{
      tbl.increments();

      tbl.string('name', 255)
      .notNullable();
  })

  .createTable('ingredients', tbl =>{
      tbl.increments();

      tbl.string('name', 255)
      .notNullable();
  })

  .createTable('steps', tbl =>{
      tbl.increments();

      tbl.integer('step_number')
      .notNullable();

      tbl.string('instructions', 255)
      .notNullable();

      // Foreign Key
      tbl.integer('recipe_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('recipes')
      .onUpdate('CASCADE')
      .onDelete('DELETE')
  })

  .createTable('recipes_ingredients', tbl =>{
      tbl.primary(["recipe_id", "ingredient_id"]);

      tbl.float('quantity')
      .notNullable();

      // Foreign Key
      tbl.integer('recipe_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('recipes')
      .onUpdate('CASCADE')
      .onDelete('DELETE')

      // Foreign Key
      tbl.integer('ingredient_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('ingredients')
      .onUpdate('CASCADE')
      .onDelete('DELETE')
  })

};

exports.down = function(knex) {
  
};
