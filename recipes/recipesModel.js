const db = require("../data/dbConfig.js");

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions
}

function getRecipes(){
    return db('recipes')
}

function getShoppingList(recipe_id){
    return db('recipes_ingredients')
        .join('ingredients', 'recipes_ingredients.ingredient_id', 'ingredients.id')
        .select('ingredients.name', 'recipes_ingredients.quantity')
        .where({recipe_id: recipe_id})
}

function getInstructions(recipe_id){
    return db('steps')
        .select('steps.step_number', 'steps.instructions')
        .orderBy('step_number')
        .where({recipe_id: recipe_id})
}