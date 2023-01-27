
const atTheOldToad = {
  potions: [
    { name: "Speed potion", price: 460 },
    { name: "Dragon breath", price: 780 },
    { name: "Stone skin", price: 520 },
  ],
  // Change code below this line
  getPotions() {
    return this.potions;
  },
  addPotion(newPotion) {
    for (const potion of this.potions) {
      if (potion.name === newPotion.name){
      return `Error! Potion ${newPotion} is already in your inventory!`;
    }
    }
    this.potions.push(newPotion);
  },
  removePotion(potionName) {
    