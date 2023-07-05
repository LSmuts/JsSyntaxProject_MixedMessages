// Defined arrays to generate from
const heroRace = ["Human", "Elf", "Dwarf", "Grung", "Owlin", "Thri-kreen", "Dragonborn", "Plasmoid", "Autognome"];
const heroClass = ["Barbarian", "Paladin", "Rogue", "Ranger", "Druid", "Monk", "Bard", "Cleric", "Warlock"];
const missionSetting = ["Forgotten Realms", "Spelljammer", "Eberron", "Exandria", "Greyhawk", "Ravenloft", "Dragonlands", "Strixhaven", "Blackmoor"];
const missionGoal = ["Mummified Goblin Hand", "Lost Legionaire Insignia", "Enchanted Five-pointed Star", "Set of Bone Pipes", "Magical Silver Bell", "Vial of Dragon Blood", "Ancient Elven Arrow", "Dragon Talon Necklace", "Brass Rune Orb"];

// Function to generate random selection from the arrays
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