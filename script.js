// Define the arrays
const heroRace = ["Human", "Elf", "Dwarf", "Halfling"];
const heroClass = ["Warrior", "Wizard", "Rogue", "Cleric"];
const missionSetting = ["Dark Forest", "Ancient Ruins", "Underground Caverns", "Haunted Mansion"];
const missionGoal = ["Retrieve an Artifact", "Rescue a Captive", "Defeat a Boss", "Solve a Mystery"];

// Function to generate random selection from an array
function getRandomElement(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

// Function to generate random mission
function generateRandomMission() {
  const selectedHeroRace = getRandomElement(heroRace);
  const selectedHeroClass = getRandomElement(heroClass);
  const selectedMissionSetting = getRandomElement(missionSetting);
  const selectedMissionGoal = getRandomElement(missionGoal);

  // Display the results to the user
  console.log("Hero Race: " + selectedHeroRace);
  console.log("Hero Class: " + selectedHeroClass);
  console.log("Mission Setting: " + selectedMissionSetting);
  console.log("Mission Goal: " + selectedMissionGoal);
}

// Generate a random mission
generateRandomMission();