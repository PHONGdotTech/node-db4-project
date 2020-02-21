
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('steps').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
        {recipe_id: 1, step_number: 1, instructions: "Mix donut ingredients"},
        {recipe_id: 1, step_number: 2, instructions: "Bake donut"},
        {recipe_id: 1, step_number: 3, instructions: "Eat donut"},
        {recipe_id: 2, step_number: 1, instructions: "Mix cookies ingredients"},
        {recipe_id: 2, step_number: 2, instructions: "Bake cookies"},
        {recipe_id: 2, step_number: 3, instructions: "Eat cookies"},
        {recipe_id: 3, step_number: 1, instructions: "Mix cake ingredients"},
        {recipe_id: 3, step_number: 2, instructions: "Bake cake "},
        {recipe_id: 3, step_number: 3, instructions: "Eat cake"},
      ]);
    });
};
