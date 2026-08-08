/**
 * Filipino Recipe Database — 20 authentic Filipino dishes
 */
const recipes = [
  // ─── 🐔 CHICKEN (5) ───
  {
    id: 1,
    name: "Chicken Adobo",
    category: "Chicken",
    cuisine: "Filipino",
    difficulty: "Easy",
    prepTime: "10 min",
    cookTime: "40 min",
    servings: 4,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Filipino_Chicken_Adobo_1.jpg/960px-Filipino_Chicken_Adobo_1.jpg",
    keyIngredients: ["Chicken", "soy sauce", "vinegar", "garlic", "pepper", "bay leaf"],
    ingredients: [
      "1 kg chicken, cut into serving pieces",
      "1/2 cup soy sauce",
      "1/3 cup vinegar",
      "6 cloves garlic, crushed",
      "1 tsp whole peppercorns",
      "3 bay leaves",
      "1 cup water",
      "2 tbsp cooking oil"
    ],
    instructions: [
      "In a bowl, combine chicken, soy sauce, garlic, and peppercorns. Marinate for 30 minutes.",
      "Heat oil in a pot over medium heat. Brown the chicken pieces on all sides.",
      "Pour in the marinade and water. Add bay leaves. Bring to a boil.",
      "Lower heat, cover, and simmer for 30 minutes or until chicken is tender.",
      "Add vinegar. Do not stir. Let it boil for 5 minutes without stirring.",
      "Stir and continue cooking until sauce thickens. Serve with steamed rice."
    ]
  },
  {
    id: 2,
    name: "Chicken Tinola",
    category: "Chicken",
    cuisine: "Filipino",
    difficulty: "Easy",
    prepTime: "15 min",
    cookTime: "35 min",
    servings: 4,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Chicken_tinola.jpg/960px-Chicken_tinola.jpg",
    keyIngredients: ["Chicken", "ginger", "garlic", "sayote", "fish sauce", "malunggay"],
    ingredients: [
      "1 kg chicken, cut into pieces",
      "1 thumb-sized ginger, julienned",
      "4 cloves garlic, minced",
      "1 onion, sliced",
      "1 sayote (chayote), cubed",
      "2 cups water or chicken broth",
      "2 tbsp fish sauce (patis)",
      "1 bunch malunggay leaves",
      "2 tbsp cooking oil"
    ],
    instructions: [
      "Heat oil in a pot. Sauté garlic, onion, and ginger until fragrant.",
      "Add chicken and cook until lightly browned.",
      "Pour in fish sauce and stir for 1 minute.",
      "Add water or broth. Bring to a boil, then lower heat and simmer for 25 minutes.",
      "Add sayote and cook until tender (about 8-10 minutes).",
      "Season with salt and pepper. Add malunggay leaves, turn off heat, and cover for 2 minutes. Serve hot."
    ]
  },
  {
    id: 3,
    name: "Sinangag na Manok",
    category: "Chicken",
    cuisine: "Filipino",
    difficulty: "Easy",
    prepTime: "10 min",
    cookTime: "15 min",
    servings: 3,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/09530jfCuisine_Foods_Fruits_Philippines_Baliuag_Bulacanfvf_22.jpg/960px-09530jfCuisine_Foods_Fruits_Philippines_Baliuag_Bulacanfvf_22.jpg",
    keyIngredients: ["Chicken", "day-old rice", "garlic", "spring onions", "soy sauce", "salt"],
    ingredients: [
      "2 cups day-old cooked rice, cold",
      "1 cup leftover cooked chicken, shredded",
      "6 cloves garlic, minced",
      "3 stalks spring onions, chopped",
      "2 tbsp soy sauce",
      "1/2 tsp salt",
      "3 tbsp cooking oil"
    ],
    instructions: [
      "Heat oil in a wok or large pan over high heat.",
      "Sauté garlic until golden brown and crispy.",
      "Add shredded chicken and stir-fry for 2 minutes.",
      "Add rice, breaking up any clumps. Stir-fry for 4-5 minutes, tossing continuously.",
      "Drizzle soy sauce and season with salt. Toss until evenly colored.",
      "Top with spring onions. Serve hot."
    ]
  },
  {
    id: 4,
    name: "Chicken Arroz Caldo",
    category: "Chicken",
    cuisine: "Filipino",
    difficulty: "Easy",
    prepTime: "10 min",
    cookTime: "45 min",
    servings: 4,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Home_-_Dinner.jpg/960px-Home_-_Dinner.jpg",
    keyIngredients: ["Chicken", "rice", "ginger", "garlic", "fish sauce", "calamansi", "toasted garlic"],
    ingredients: [
      "500g chicken, cut into pieces",
      "1 cup regular rice (not glutinous)",
      "1 thumb ginger, julienned",
      "4 cloves garlic, minced",
      "1 onion, chopped",
      "6 cups water or chicken broth",
      "2 tbsp fish sauce (patis)",
      "2 hard-boiled eggs, sliced",
      "Calamansi or lemon wedges",
      "Toasted garlic and scallions for garnish"
    ],
    instructions: [
      "Sauté garlic, onion, and ginger in oil until fragrant.",
      "Add chicken and cook until lightly browned.",
      "Pour in fish sauce and stir. Add rice and water. Bring to a boil.",
      "Lower heat and simmer for 30-40 minutes, stirring occasionally, until rice is soft and porridge-like.",
      "Season with salt and pepper. Adjust consistency with more water if needed.",
      "Serve in bowls topped with sliced egg, toasted garlic, scallions, and calamansi on the side."
    ]
  },
  {
    id: 5,
    name: "Sotanghon na Manok",
    category: "Chicken",
    cuisine: "Filipino",
    difficulty: "Medium",
    prepTime: "15 min",
    cookTime: "25 min",
    servings: 4,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/5912Tinanglarang_Tinola_with_Sotanghon_01.jpg/960px-5912Tinanglarang_Tinola_with_Sotanghon_01.jpg",
    keyIngredients: ["Chicken", "glass noodles", "garlic", "onion", "fish sauce", "carrots"],
    ingredients: [
      "250g chicken breast, shredded",
      "200g sotanghon (glass noodles), soaked in water until soft",
      "4 cloves garlic, minced",
      "1 onion, chopped",
      "1 carrot, julienned",
      "1/2 cup cabbage, shredded",
      "2 tbsp fish sauce (patis)",
      "4 cups chicken broth",
      "2 tbsp cooking oil",
      "Scallions and toasted garlic for garnish"
    ],
    instructions: [
      "Heat oil in a pot. Sauté garlic and onion until fragrant.",
      "Add shredded chicken and cook for 2 minutes.",
      "Pour in fish sauce and broth. Bring to a boil.",
      "Add soaked sotanghon noodles. Cook for 5-7 minutes until tender.",
      "Add carrots and cabbage. Cook for 2 more minutes.",
      "Season with salt and pepper. Garnish with scallions and toasted garlic. Serve hot."
    ]
  },

  // ─── 🥩 PORK (5) ───
  {
    id: 6,
    name: "Lechon Manok",
    category: "Pork",
    cuisine: "Filipino",
    difficulty: "Medium",
    prepTime: "20 min",
    cookTime: "1 hr 15 min",
    servings: 4,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Lechon_Manok_%28Taichung%29%2C_Nov_2024.jpg/960px-Lechon_Manok_%28Taichung%29%2C_Nov_2024.jpg",
    keyIngredients: ["Whole chicken", "lemongrass", "garlic", "soy sauce", "patis", "annatto oil"],
    ingredients: [
      "1 whole chicken (about 1.5 kg)",
      "4 stalks lemongrass, pounded",
      "6 cloves garlic, crushed",
      "3 tbsp soy sauce",
      "2 tbsp fish sauce (patis)",
      "1 tsp ground pepper",
      "2 tbsp annatto oil (atsuete)",
      "1 tsp salt"
    ],
    instructions: [
      "Rub chicken inside and out with garlic, soy sauce, fish sauce, and pepper. Marinate for 2 hours.",
      "Stuff the cavity with lemongrass stalks.",
      "Brush the skin with annatto oil for the signature red-orange color.",
      "Roast on a rotisserie or in a preheated 375°F (190°C) oven for 1 hour 15 minutes, basting occasionally.",
      "Let rest for 10 minutes before chopping. Serve with liver sauce or sinamak (spiced vinegar)."
    ]
  },
  {
    id: 7,
    name: "Pork Menudo",
    category: "Pork",
    cuisine: "Filipino",
    difficulty: "Medium",
    prepTime: "20 min",
    cookTime: "40 min",
    servings: 6,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Menudo_Filipino_Food.jpg/960px-Menudo_Filipino_Food.jpg",
    keyIngredients: ["Pork kasim", "tomato sauce", "pork liver", "potato", "carrot", "bell pepper"],
    ingredients: [
      "500g pork kasim (shoulder), cubed",
      "200g pork liver, cubed",
      "1 cup tomato sauce",
      "2 potatoes, cubed",
      "1 carrot, cubed",
      "1 red bell pepper, diced",
      "4 cloves garlic, minced",
      "1 onion, chopped",
      "1/2 cup water",
      "2 tbsp cooking oil",
      "Salt, pepper, and sugar to taste"
    ],
    instructions: [
      "Heat oil in a pot. Sauté garlic and onion until soft.",
      "Add pork and cook until browned on all sides.",
      "Pour in tomato sauce and water. Bring to a boil, then simmer for 25 minutes until pork is tender.",
      "Add potatoes and carrots. Cook for 8 minutes.",
      "Add liver and bell pepper. Cook for 5 more minutes.",
      "Season with salt, pepper, and a pinch of sugar. Serve hot."
    ]
  },
  {
    id: 8,
    name: "Pork Adobo",
    category: "Pork",
    cuisine: "Filipino",
    difficulty: "Easy",
    prepTime: "10 min",
    cookTime: "45 min",
    servings: 4,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Adobo_DSCF4391.jpg/960px-Adobo_DSCF4391.jpg",
    keyIngredients: ["Pork belly", "soy sauce", "vinegar", "garlic", "bay leaf", "peppercorn"],
    ingredients: [
      "500g pork belly, cubed",
      "1/2 cup soy sauce",
      "1/3 cup vinegar",
      "6 cloves garlic, crushed",
      "3 bay leaves",
      "1 tsp whole peppercorns",
      "1 cup water",
      "2 tbsp cooking oil"
    ],
    instructions: [
      "Combine pork, soy sauce, garlic, and peppercorns in a bowl. Marinate for 30 minutes.",
      "Heat oil in a pot. Brown the pork on all sides.",
      "Pour in the marinade and water. Add bay leaves. Bring to a boil.",
      "Lower heat, cover, and simmer for 30 minutes until pork is tender.",
      "Add vinegar. Do not stir. Let it boil for 5 minutes without stirring.",
      "Stir and simmer until sauce thickens. Serve with steamed rice."
    ]
  },
  {
    id: 9,
    name: "Lechon Kawali",
    category: "Pork",
    cuisine: "Filipino",
    difficulty: "Medium",
    prepTime: "15 min",
    cookTime: "30 min",
    servings: 4,
    image: "https://upload.wikimedia.org/wikipedia/commons/c/cc/Lechon_Kawali.jpg",
    keyIngredients: ["Pork liempo", "salt", "pepper", "garlic", "bay leaf", "water"],
    ingredients: [
      "1 kg pork liempo (belly), whole slab",
      "1 tbsp salt",
      "1 tsp ground pepper",
      "6 cloves garlic, crushed",
      "4 cups water",
      "3 bay leaves",
      "1 tsp whole peppercorns",
      "Cooking oil for deep frying"
    ],
    instructions: [
      "Boil water with salt, pepper, garlic, bay leaves, and peppercorns.",
      "Add pork belly and boil for 25-30 minutes until tender.",
      "Remove pork and pat dry. Let it cool, then refrigerate uncovered overnight (this dries the skin).",
      "Cut pork into serving pieces.",
      "Heat oil in a deep pan. Deep fry pieces until golden and crispy (about 8-10 minutes).",
      "Drain on paper towels. Serve with lechon sauce or vinegar dipping sauce."
    ]
  },
  {
    id: 10,
    name: "Pork Humba",
    category: "Pork",
    cuisine: "Filipino",
    difficulty: "Easy",
    prepTime: "10 min",
    cookTime: "50 min",
    servings: 4,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Humba_%28Philippines%29.jpg/960px-Humba_%28Philippines%29.jpg",
    keyIngredients: ["Pork belly", "soy sauce", "vinegar", "garlic", "star anise", "saba banana"],
    ingredients: [
      "500g pork belly, cubed",
      "1/4 cup soy sauce",
      "1/4 cup vinegar",
      "6 cloves garlic, crushed",
      "3 bay leaves",
      "2 star anise pods",
      "2 saging na saba (plantain bananas), sliced",
      "1/2 tsp whole peppercorns",
      "1 cup water",
      "1 tbsp cooking oil",
      "1 tsp sugar (optional)"
    ],
    instructions: [
      "Heat oil in a pot. Sauté garlic until golden.",
      "Add pork and cook until lightly browned.",
      "Pour in soy sauce, vinegar, and water. Add bay leaves, star anise, and peppercorns.",
      "Bring to a boil, then lower heat and simmer for 40 minutes until pork is very tender.",
      "Add saba bananas and sugar. Cook for 5 more minutes.",
      "Adjust seasoning. Serve hot with steamed rice."
    ]
  },

  // ─── 🐟 FISH & SEAFOOD (3) ───
  {
    id: 11,
    name: "Sweet and Sour Fish",
    category: "Fish & Seafood",
    cuisine: "Filipino",
    difficulty: "Medium",
    prepTime: "15 min",
    cookTime: "20 min",
    servings: 3,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Iskabecheng_Maya-Maya_%28Sweet_and_Sour_Fish%29.jpg/960px-Iskabecheng_Maya-Maya_%28Sweet_and_Sour_Fish%29.jpg",
    keyIngredients: ["Fish fillet", "cornstarch", "bell pepper", "pineapple", "tomato sauce", "vinegar"],
    ingredients: [
      "500g fish fillet (lapu-lapu or tilapia), sliced",
      "1/2 cup cornstarch",
      "1 red bell pepper, cubed",
      "1 green bell pepper, cubed",
      "1 onion, sliced",
      "1/2 cup pineapple chunks",
      "1/2 cup tomato sauce",
      "3 tbsp vinegar",
      "3 tbsp sugar",
      "1/2 cup water",
      "Salt and pepper to taste",
      "Cooking oil for frying"
    ],
    instructions: [
      "Season fish fillets with salt and pepper. Coat with cornstarch.",
      "Heat oil and fry fish until golden and crispy. Drain and set aside.",
      "In a separate pan, sauté onion and bell peppers.",
      "Add tomato sauce, vinegar, sugar, pineapple chunks, and water. Simmer for 5 minutes.",
      "Thicken with cornstarch slurry if needed. Adjust sweet-sour balance.",
      "Pour sauce over fried fish or serve on the side. Serve with steamed rice."
    ]
  },
  {
    id: 12,
    name: "Paksiw na Bangus",
    category: "Fish & Seafood",
    cuisine: "Filipino",
    difficulty: "Easy",
    prepTime: "10 min",
    cookTime: "20 min",
    servings: 3,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Food_delicacies_of_Bulakan_01.jpg/960px-Food_delicacies_of_Bulakan_01.jpg",
    keyIngredients: ["Bangus", "vinegar", "ginger", "garlic", "green chili", "ampalaya"],
    ingredients: [
      "1 medium bangus (milkfish), sliced into serving pieces",
      "1 cup vinegar",
      "1 thumb ginger, sliced",
      "4 cloves garlic, crushed",
      "2 green chili peppers",
      "1 small ampalaya (bitter gourd), sliced",
      "1 cup water",
      "1 tsp salt and pepper"
    ],
    instructions: [
      "In a pot, combine vinegar, water, ginger, garlic, salt, and pepper. Bring to a boil.",
      "Gently add bangus pieces. Do not stir (stirring breaks the fish).",
      "Lower heat and simmer for 10 minutes.",
      "Add green chilies and ampalaya. Cook for 5 more minutes.",
      "Serve hot with steamed rice."
    ]
  },
  {
    id: 13,
    name: "Relyenong Bangus",
    category: "Fish & Seafood",
    cuisine: "Filipino",
    difficulty: "Hard",
    prepTime: "30 min",
    cookTime: "30 min",
    servings: 4,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Relyeno_Bangus.jpg/960px-Relyeno_Bangus.jpg",
    keyIngredients: ["Bangus", "carrots", "onion", "garlic", "raisins", "egg", "soy sauce"],
    ingredients: [
      "1 large bangus (milkfish), about 500g",
      "1 carrot, minced",
      "1 onion, chopped",
      "4 cloves garlic, minced",
      "2 tbsp raisins",
      "2 eggs, beaten",
      "2 tbsp soy sauce",
      "Salt and pepper to taste",
      "Cooking oil for frying"
    ],
    instructions: [
      "Scrape the meat from the bangus, keeping the skin intact.",
      "Debone the fish meat and flake it into a bowl.",
      "Mix fish meat with carrot, onion, garlic, raisins, beaten egg, and soy sauce.",
      "Stuff the mixture back into the fish skin. Sew or secure the opening.",
      "Steam the stuffed fish for 15 minutes, then let it cool.",
      "Pan-fry until golden on both sides. Slice and serve."
    ]
  },

  // ─── 🥬 VEGETABLES (3) ───
  {
    id: 14,
    name: "Pinakbet",
    category: "Vegetables",
    cuisine: "Filipino",
    difficulty: "Easy",
    prepTime: "15 min",
    cookTime: "20 min",
    servings: 4,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Pinakbet_ni_Lakay_Jesse.jpg/960px-Pinakbet_ni_Lakay_Jesse.jpg",
    keyIngredients: ["Kalabasa", "sitaw", "talong", "ampalaya", "okra", "bagoong", "garlic", "tomato"],
    ingredients: [
      "1 cup kalabasa (pumpkin), cubed",
      "100g sitaw (string beans), cut into 2-inch pieces",
      "1 talong (eggplant), sliced",
      "1 small ampalaya (bitter gourd), sliced",
      "100g okra, halved",
      "3 tbsp bagoong isda (fermented fish)",
      "4 cloves garlic, minced",
      "1 onion, sliced",
      "2 tomatoes, chopped",
      "1/2 cup water",
      "2 tbsp cooking oil"
    ],
    instructions: [
      "Heat oil in a pan. Sauté garlic, onion, and tomatoes until soft.",
      "Add bagoong and cook for 2 minutes.",
      "Add kalabasa and water. Cover and cook for 5 minutes.",
      "Add sitaw, talong, ampalaya, and okra. Do not stir too much.",
      "Cover and cook for 8-10 minutes until vegetables are tender.",
      "Gently toss. Serve hot with steamed rice."
    ]
  },
  {
    id: 15,
    name: "Ginisang Munggo",
    category: "Vegetables",
    cuisine: "Filipino",
    difficulty: "Easy",
    prepTime: "10 min",
    cookTime: "40 min",
    servings: 4,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Monggojf.JPG/960px-Monggojf.JPG",
    keyIngredients: ["Munggo", "garlic", "onion", "tomato", "chicharon", "fish sauce"],
    ingredients: [
      "1 cup munggo (mung beans), rinsed",
      "4 cloves garlic, minced",
      "1 onion, chopped",
      "2 tomatoes, chopped",
      "1/2 cup crushed chicharon",
      "2 tbsp fish sauce (patis)",
      "4 cups water",
      "2 tbsp cooking oil",
      "1/2 cup malunggay leaves or kangkong (optional)"
    ],
    instructions: [
      "Boil munggo in water until soft (about 30 minutes). Mash some beans for thicker texture. Set aside.",
      "In a separate pot, heat oil and sauté garlic, onion, and tomatoes.",
      "Add cooked munggo and fish sauce. Stir well.",
      "Add malunggay leaves if using. Cook for 3 minutes.",
      "Top with crushed chicharon. Serve hot with steamed rice."
    ]
  },
  {
    id: 16,
    name: "Adobong Kangkong",
    category: "Vegetables",
    cuisine: "Filipino",
    difficulty: "Easy",
    prepTime: "5 min",
    cookTime: "10 min",
    servings: 2,
    image: "https://upload.wikimedia.org/wikipedia/commons/4/47/Adobong_kangkong_%28Philippines%29.jpg",
    keyIngredients: ["Kangkong", "soy sauce", "vinegar", "garlic", "chili"],
    ingredients: [
      "2 bunches kangkong (water spinach), cut into 3-inch pieces",
      "3 tbsp soy sauce",
      "2 tbsp vinegar",
      "4 cloves garlic, minced",
      "3 siling labuyo (bird's eye chili), chopped",
      "2 tbsp cooking oil"
    ],
    instructions: [
      "Heat oil in a pan. Sauté garlic until golden.",
      "Add siling labuyo and cook for 30 seconds.",
      "Add kangkong stalks first (cook for 1 minute), then add leaves.",
      "Pour in soy sauce and vinegar. Toss quickly.",
      "Cook for 2 minutes until kangkong is wilted but still vibrant. Serve immediately."
    ]
  },

  // ─── 🥟 BREAKFAST & SILOG (2) ───
  {
    id: 17,
    name: "Tapsilog",
    category: "Breakfast & Silog",
    cuisine: "Filipino",
    difficulty: "Medium",
    prepTime: "10 min",
    cookTime: "20 min",
    servings: 2,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Tapsilog%2C_Mar_2026.jpg/960px-Tapsilog%2C_Mar_2026.jpg",
    keyIngredients: ["Beef tapa", "garlic rice", "egg", "soy sauce", "calamansi", "garlic"],
    ingredients: [
      "300g beef sirloin, thinly sliced",
      "3 tbsp soy sauce",
      "2 tbsp calamansi juice",
      "4 cloves garlic, crushed",
      "1 tsp sugar",
      "1/2 tsp ground pepper",
      "2 cups cooked rice (for garlic rice)",
      "4 cloves garlic, fried (for garlic rice)",
      "2 eggs",
      "Cooking oil"
    ],
    instructions: [
      "Marinate beef in soy sauce, calamansi juice, garlic, sugar, and pepper for at least 2 hours.",
      "For garlic rice: stir-fry cold rice with fried garlic until hot and fragrant.",
      "Heat oil in a pan. Fry marinated beef until cooked and slightly caramelized (about 3-4 minutes per side).",
      "Fry eggs sunny-side up or to your preference.",
      "Serve beef tapa with garlic rice and fried egg. Add vinegar dipping sauce on the side."
    ]
  },
  {
    id: 18,
    name: "Champorado",
    category: "Breakfast & Silog",
    cuisine: "Filipino",
    difficulty: "Easy",
    prepTime: "5 min",
    cookTime: "25 min",
    servings: 4,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Champorado.jpg/960px-Champorado.jpg",
    keyIngredients: ["Glutinous rice", "cocoa powder", "sugar", "milk", "tuyo"],
    ingredients: [
      "1 cup glutinous rice (malagkit)",
      "1/2 cup cocoa powder (tablea de cacao preferred)",
      "1/2 cup sugar (adjust to taste)",
      "4 cups water",
      "1 cup evaporated milk",
      "Dried fish (tuyo) on the side"
    ],
    instructions: [
      "In a pot, combine water and glutinous rice. Bring to a boil.",
      "Lower heat and simmer, stirring occasionally, until rice is soft and porridge-like (about 20 minutes).",
      "Add cocoa powder and sugar. Stir until well combined and smooth.",
      "Cook for 5 more minutes, stirring constantly to prevent burning.",
      "Serve in bowls. Top with evaporated milk. Best paired with crispy fried tuyo (dried fish)."
    ]
  },

  // ─── 🍜 NOODLES & SNACKS (2) ───
  {
    id: 19,
    name: "Pancit Canton",
    category: "Noodles & Snacks",
    cuisine: "Filipino",
    difficulty: "Medium",
    prepTime: "15 min",
    cookTime: "15 min",
    servings: 4,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Pancit_Guisado.jpg/960px-Pancit_Guisado.jpg",
    keyIngredients: ["Pancit canton noodles", "soy sauce", "garlic", "carrots", "sayote", "sausage"],
    ingredients: [
      "500g pancit canton noodles",
      "3 tbsp soy sauce",
      "4 cloves garlic, minced",
      "1 onion, sliced",
      "1 carrot, julienned",
      "1 sayote (chayote), julienned",
      "2 Chinese sausages (chorizo de bilbao), sliced",
      "1 cup chicken broth",
      "2 tbsp cooking oil",
      "Calamansi wedges for serving"
    ],
    instructions: [
      "Soak pancit canton noodles in water until softened. Drain and set aside.",
      "Heat oil in a wok. Sauté garlic and onion.",
      "Add sausage slices and cook for 2 minutes.",
      "Add carrots and sayote. Stir-fry for 2 minutes.",
      "Add noodles, soy sauce, and chicken broth. Toss continuously until noodles are cooked and sauce is absorbed.",
      "Season with salt and pepper. Serve with calamansi wedges."
    ]
  },
  {
    id: 20,
    name: "Lumpiang Shanghai",
    category: "Noodles & Snacks",
    cuisine: "Filipino",
    difficulty: "Medium",
    prepTime: "30 min",
    cookTime: "15 min",
    servings: "6 (makes ~30 pieces)",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/95/Lumpiang_Shanghai_%28Philippines%29.jpg",
    keyIngredients: ["Ground pork", "carrots", "onion", "garlic", "lumpia wrapper", "soy sauce"],
    ingredients: [
      "500g ground pork",
      "1 carrot, minced",
      "1 onion, minced",
      "4 cloves garlic, minced",
      "1 egg",
      "2 tbsp soy sauce",
      "1 package lumpia wrapper (spring roll wrappers)",
      "Salt and pepper to taste",
      "Cooking oil for deep frying",
      "Sweet chili sauce for dipping"
    ],
    instructions: [
      "Combine ground pork, carrot, onion, garlic, egg, soy sauce, salt, and pepper. Mix well.",
      "Place a spoonful of filling on a lumpia wrapper. Roll tightly, folding in the sides. Seal the edge with water.",
      "Repeat until all filling is used.",
      "Heat oil in a deep pan. Fry lumpia in batches until golden brown (about 5-6 minutes).",
      "Drain on paper towels. Serve with sweet chili sauce or banana ketchup."
    ]
  }
];

module.exports = recipes;