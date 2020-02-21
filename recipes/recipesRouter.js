const express = require("express");
const Recipes = require("./recipesModel.js")
const router = express.Router();

router.get("/", (req,res)=>{
    Recipes.getRecipes()
    .then(recipes =>{
        res.status(500).json(recipes)
    })
    .catch(err=>{
        res.status(500).json({message:"There was an error getting the list of recipes."})
    })
})

router.get("/:id/shoppingList", (req,res)=>{
    Recipes.getShoppingList(req.params.id)
    .then(list=>{
        res.status(200).json(list)
    })
    .catch(err=>{
        res.status(500).json({message:"Could not get shopping list."})
    })
})

router.get("/:id/instructions", (req,res)=>{
    Recipes.getInstructions(req.params.id)
    .then(steps=>{
        res.status(200).json(steps)
    })
    .catch(err=>{
        res.status(500).json({message:"Could not get instructions."})
    })
})

module.exports = router;