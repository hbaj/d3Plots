import { useState } from "react";
const animales = {
    perro: 4,
    gatos: 2,
};

const frutas = {
    manzanas: 8,
    peras: 3,
};
// console.log(animales);

const Recipes = () => {
    const [recipe, setRecipe] = useState({});
    console.log('checking prop keys:',Object.keys(animales));
    return(
    <div>
        <h3>Current Recipe</h3>
        <button onClick={() => setRecipe(animales)}>
            animales
        </button>
        <button onClick={() => setRecipe(frutas)}>
            frutas
        </button>
        <ul>
            {Object.keys(recipe).map((material) => (
                <li key = {material}>
                    {material}:{recipe[material]}
                </li>
            ))}
        </ul>

    </div>
    );
};

export default Recipes