console.log("test")

const shpwRecipe = async function() {
  try {
const res = await fetch("https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bc886"); 
 console.log(res);
 const data = await res.json(res)
 console.log(data);
 if(!res.ok) throw new Error (`${res.message}`)

  let {recipe} = data.data;
  recipe = {
    id:recipe.id,
    title:recipe.title,
    image:recipe.image_url,
    publisher:recipe.publisher,
    sourceUrl: recipe.source_url,
    servings: recipe.servings,
    cookingTime: recipe.cooking_time,
    ingredients: recipe.ingredients
  }
  console.log(recipe)
} catch (err) {
  console.log(err)
}
}
shpwRecipe()