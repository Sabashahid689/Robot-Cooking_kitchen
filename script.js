function cook(food) {
  // Hide all food images first
  const allFoods = document.querySelectorAll('.food-display img');
  allFoods.forEach(img => img.style.display = 'none');

  // Get page elements
  const robotSpeech = document.getElementById("robotSpeech");
  const foodTitle = document.getElementById("foodTitle");
  const foodRecipe = document.getElementById("foodRecipe");

  // Show selected food image
  const selectedFood = document.getElementById(food);
  if (selectedFood) {
    selectedFood.style.display = "block";
  }

  // Recipe details
  let recipeText = "";

  switch (food) {
    case "Biryani":
      recipeText = "🍗 Ingredients:\nRice, Chicken, Onions, Yogurt, Spices\n\n👨‍🍳 Steps:\n1️⃣ Fry onions.\n2️⃣ Cook chicken with spices.\n3️⃣ Layer rice and chicken.\n4️⃣ Steam for perfect Biryani!";
      break;

    case "Karahi":
    case "Chicken Karahi":
      recipeText = "🍅 Ingredients:\nChicken, Tomatoes, Ginger, Garlic, Green Chilies\n\n👨‍🍳 Steps:\n1️⃣ Fry chicken in oil.\n2️⃣ Add tomatoes & spices.\n3️⃣ Cook until thick gravy forms.\n4️⃣ Garnish with coriander!";
      break;

    case "Haleem":
      recipeText = "🌾 Ingredients:\nMeat, Lentils, Wheat, Spices, Fried Onions\n\n👨‍🍳 Steps:\n1️⃣ Boil lentils & wheat.\n2️⃣ Cook meat with spices.\n3️⃣ Blend and mix everything.\n4️⃣ Garnish with fried onions and lemon!";
      break;

    case "Nihari":
      recipeText = "🥩 Ingredients:\nBeef, Wheat Flour, Ghee, Nihari Masala\n\n👨‍🍳 Steps:\n1️⃣ Cook beef with spices.\n2️⃣ Add flour paste for thick gravy.\n3️⃣ Simmer on low flame overnight.\n4️⃣ Serve hot with naan!";
      break;

    case "Pasta":
      recipeText = "🍝 Ingredients:\nPasta, Chicken, Cream, Cheese, Garlic, Black Pepper\n\n👨‍🍳 Steps:\n1️⃣ Boil pasta.\n2️⃣ Cook chicken with garlic.\n3️⃣ Add cream & cheese.\n4️⃣ Mix pasta and serve hot!";
      break;

    case "Kofta":
      recipeText = "🍲 Ingredients:\nMinced Meat, Onions, Tomatoes, Spices, Eggs\n\n👨‍🍳 Steps:\n1️⃣ Make small meatballs.\n2️⃣ Fry until golden.\n3️⃣ Add in tomato gravy.\n4️⃣ Cook until soft and serve with rice or roti!";
      break;

    default:
      recipeText = "Please select a valid dish!";
  }

  // Display text info
  foodTitle.innerText = food;
  foodRecipe.innerText = recipeText;

  // Robot talks while cooking
  robotSpeech.innerText = `Cooking ${food}... please wait 🔥🍲`;
  speak(`Cooking ${food}. Please wait.`);

  // After 3 seconds, robot announces dish is ready
  setTimeout(() => {
    robotSpeech.innerText = `${food} is ready! Enjoy your meal 😋`;
    speak(`${food} is ready! Enjoy your meal!`);
  }, 3000);
}

// 🗣️ Robot Voice Function (Text to Speech)
function speak(message) {
  const speech = new SpeechSynthesisUtterance(message);
  speech.lang = "en-US";
  speech.pitch = 1;
  speech.rate = 1;
  window.speechSynthesis.speak(speech);
}
