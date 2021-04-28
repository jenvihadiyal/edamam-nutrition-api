import http from "../http-common";

const getAll = () => {
  return http.post("/nutrition-details?app_id=daff8800&app_key=4ce4b8c1c0a6295ac9a163df39ab19ba",
    {
      "title": "Fresh Ham Roasted With Rye Bread and Dried Fruit Stuffing",
      "prep": "1. Have your butcher bone and butterfly the ham and score the fat in a diamond pattern. ...",
      "yield": "About 15 servings",
      "ingr": [
        "1 fresh ham, about 18 pounds, prepared by your butcher (See Step 1)",
        "7 cloves garlic, minced",
        "1 tablespoon caraway seeds, crushed",
        "4 teaspoons salt",
        "Freshly ground pepper to taste",
        "1 teaspoon olive oil",
        "1 medium onion, peeled and chopped",
        "3 cups sourdough rye bread, cut into 1/2-inch cubes",
        "1 1/4 cups coarsely chopped pitted prunes",
        "1 1/4 cups coarsely chopped dried apricots",
        "1 large tart apple, peeled, cored and cut into 1/2-inch cubes",
        "2 teaspoons chopped fresh rosemary",
        "1 egg, lightly beaten",
        "1 cup chicken broth, homemade or low-sodium canned"
      ]

    }
  );
};

const get = () => {
  return http.post("food-database/v2/nutrients?app_id=daff8800&app_key=4ce4b8c1c0a6295ac9a163df39ab19ba", {
    "ingredients": [
      {
        "quantity": 1,
        "measureURI": "http://www.edamam.com/ontologies/edamam.owl#Measure_unit",
        "foodId": "food_bnbh4ycaqj9as0a9z7h9xb2wmgat",
        "qualifiers": ["http://www.edamam.com/ontologies/edamam.owl#Qualifier_large"]
      }
    ]
  });
};

const TutorialService = {
  getAll,
  get,

};

export default TutorialService;
