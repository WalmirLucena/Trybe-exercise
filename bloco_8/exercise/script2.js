const mage = {
    healthPoints: 130,
    intelligence: 45,
    mana: 125,
    damage: undefined,
  };
  
  const warrior = {
    healthPoints: 200,
    strength: 30,
    weaponDmg: 2,
    damage: undefined,
  };
  
  const dragon = {
    healthPoints: 350,
    strength: 50,
    damage: undefined,
  };
 
  const battleMembers = { mage, warrior, dragon };
 //1
  const damageDragon = (dragon) => Math.floor((Math.random()*((dragon.strength+1)-15))+15);
  
/*   console.log(damageDragon(dragon)); */

  //2
  const damageWarrior = (warrior) => Math.floor((Math.random()*((warrior.strength*warrior.weaponDmg)+1-warrior.strength))+warrior.strength);
/* 
  console.log(damageWarrior(warrior)); */
  //3
  const damageMage = (mage) => Math.floor((Math.random()*((mage.intelligence*2)+1-mage.intelligence)+mage.intelligence));

  const consMana = (mage) => {
    if(mage.mana < 15){
        return 'Não possui mana suficiente';
    }  
    return mage.mana = 15;
  }

const mageConsumption = (mage) => {
    return {
    damage : damageMage(mage),
    mana: consMana(mage)
    }
}
/* console.log(mageConsumption(mage)); */

const gameActions = {
  turnWarrior: (damageWarrior ) => { 
    dragon.healthPoints -= damageWarrior(warrior); 
    warrior.damage = damageWarrior(warrior);
  },
  turnMage: (mageConsumption) => {
    const atackMage = mageConsumption(mage);
    dragon.healthPoints -= atackMage.damage;
    mage.damage = atackMage.damage;
    mage.mana = atackMage.mana;
  },
  turnDragon: (damageDragon) => {
    const atackDragon = damageDragon(dragon);
    dragon.damage = atackDragon;
    mage.healthPoints -= atackDragon;
    warrior.healthPoints -= atackDragon;
  },
  showBattleMembers: () => console.log(battleMembers), 
};
gameActions.turnWarrior(damageWarrior);
gameActions.turnMage(mageConsumption);
gameActions.turnDragon(damageDragon);
gameActions.showBattleMembers();