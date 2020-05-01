// Grab input elements
const foodInput = document.querySelector("#foodName");
const portionInput = document.querySelector("#portion");
const caloriesInput = document.querySelector("#calories");
const fatInput = document.querySelector("#totalFat");
const carbsInput = document.querySelector("#totalCarbs");
const proteinInput = document.querySelector("#totalProtein");

// Add event listener
const saveBtn = document.querySelector(".btn");
saveBtn.addEventListener("click", getInput);

function getInput() {
  let foodInputLower = foodInput.value.toLowerCase();
  let foodData = [
    {
      food: `${foodInputLower}`,
      calories: `${caloriesInput.value}`,
      fat: `${fatInput.value}`,
      carbs: `${carbsInput.value}`,
      protein: `${proteinInput.value}`,
    },
  ];

  // display in daily card the cumulative sum of each cals/fat/carb/prot
  document.querySelector(".dayCalories").innerHTML =
    "Calories: " + foodData[0].calories + "(g)";
  document.querySelector(".dayFat").innerHTML =
    "Fat: " + foodData[0].fat + "(g)";
  document.querySelector(".dayCarbs").innerHTML =
    "Carbs: " + foodData[0].carbs + "(g)";
  document.querySelector(".dayProtein").innerHTML =
    "Protein: " + foodData[0].protein + "(g)";

  // display in weekly card the cumulative sum of each cals/fat/carb/prot
  document.querySelector(".weekCalories").innerHTML =
    "Calories: " + foodData[0].calories + "(g)";
  document.querySelector(".weekFat").innerHTML =
    "Fat: " + foodData[0].fat + "(g)";
  document.querySelector(".weekCarbs").innerHTML =
    "Carbs: " + foodData[0].carbs + "(g)";
  document.querySelector(".weekProtein").innerHTML =
    "Protein: " + foodData[0].protein + "(g)";

  // Store foodName in LS with associated nutritional values

  // Store daily totals to LS

  // Store weekly totals to LS

  // If foodName does not exist, add user input to LS and push to array. Else, grab array and set to variable
  let foodDataArr;
  if (localStorage.getItem(foodInputLower) === null) {
    // localStorage.setItem("foodDataArr", JSON.stringify(foodData));
    foodDataArr = [];
  } else {
    foodDataArr = JSON.parse(localStorage.getItem("foodDataArr"));
  }

  // Push new data to existing array
  foodDataArr.push(foodData);

  localStorage.getItem(foodData);
  console.log(foodData);

  if (foodDataArr === null) {
    console.log("Not in LS");
  } else {
    console.log(foodDataArr);
  }

  // localStorage.setItem("Food", `${foodInputLower}`);
  // localStorage.setItem("Calories", caloriesInput);
  // localStorage.setItem("Fat", `${fatInput}`);
  // localStorage.setItem("Carbs", `${carbsInput}`);
  // localStorage.setItem("Protein", `${proteinInput}`);

  // Display data in daily card
  // console.log(foodInputLower);
  // console.log(portionInput.value);
  // console.log(caloriesInput.value);
  // console.log(fatInput.value);
  // console.log(carbsInput.value);
  // console.log(proteinInput.value);

  // Clear input fields after click event
  foodInput.value = "";
  portionInput.value = "";
  caloriesInput.value = "";
  fatInput.value = "";
  carbsInput.value = "";
  proteinInput.value = "";
}
