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

function getInput(e) {
  let foodInputLower = foodInput.value.toLowerCase();
  let foodData = [
    {
      foodName: `${foodInputLower}`,
      calories: `${caloriesInput.value}`,
      fat: `${fatInput.value}`,
      carbs: `${carbsInput.value}`,
      protein: `${proteinInput.value}`,
    },
  ];

  // This works but rewrite each and only displays 1
  // document.querySelector(".dayCard").innerHTML =
  //   (foodData[0].calories,
  //   foodData[0].fat,
  //   foodData[0].carbs,
  //   foodData[0].protein);

  // Set entire input field to a variable
  // let allData = {
  //   document.querySelector(".dayCalories").innerHTML =
  //   "Calories: " + foodData[0].calories + "(g)",
  // document.querySelector(".dayFat").innerHTML =
  //   "Fat: " + foodData[0].fat + "(g)",
  // document.querySelector(".dayCarbs").innerHTML =
  //   "Carbs: " + foodData[0].carbs + "(g)",
  // document.querySelector(".dayProtein").innerHTML =
  //   "Protein: " + foodData[0].protein + "(g)",
  // }

  // document.querySelector(".dayCard").innerHTML = allData; // unexpected token .
  //  --------------------------------------------------

  // display in daily card the cumulative sum of each cals/fat/carb/prot
  document.querySelector(".dayCalories").innerHTML =
    "Calories: " + foodData[0].calories + "(g)";
  document.querySelector(".dayFat").innerHTML =
    "Fat: " + foodData[0].fat + "(g)";
  document.querySelector(".dayCarbs").innerHTML =
    "Carbs: " + foodData[0].carbs + "(g)";
  document.querySelector(".dayProtein").innerHTML =
    "Protein: " + foodData[0].protein + "(g)";

  // // display in weekly card the cumulative sum of each cals/fat/carb/prot
  document.querySelector(".weekCalories").innerHTML =
    "Calories: " + foodData[0].calories + "(g)";
  document.querySelector(".weekFat").innerHTML =
    "Fat: " + foodData[0].fat + "(g)";
  document.querySelector(".weekCarbs").innerHTML =
    "Carbs: " + foodData[0].carbs + "(g)";
  document.querySelector(".weekProtein").innerHTML =
    "Protein: " + foodData[0].protein + "(g)";

  // ------------------------------------------------------
  /* THE FOLLOWING IS TO STORE REFERENCE DATA TO FROM A SEARCH FUNCTION TO BE ADDED LATER, NOT PART OF THE DAILY/WEEKLY CARDS */
  // Store foodName in LS with associated nutritional values
  // Check if foodName does not exist
  if (localStorage.getItem(foodInputLower) != foodInputLower) {
    localStorage.setItem(
      "Food Name",
      JSON.stringify(
        foodData[0].foodName,
        foodData[0].calories,
        foodData[0].fat,
        foodData[0].carbs,
        foodData[0].protein
      )
    );
    console.log("Item added");
    // If foodName does exist
  } else if (localStorage.getItem(foodInputLower) === foodInputLower) {
    alert("Item already exists");
  } else {
    alert("There is an error");
  }
  // ------------------------------------------------------

  // Store cumulative daily totals to LS

  // Store cumulative weekly totals to LS

  // Clear input fields after click event
  foodInput.value = "";
  portionInput.value = "";
  caloriesInput.value = "";
  fatInput.value = "";
  carbsInput.value = "";
  proteinInput.value = "";

  e.preventDefault;
}
