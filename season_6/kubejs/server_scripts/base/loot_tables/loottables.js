LootJS.modifiers(event => {
  event.addLootTableModifier('chests/village/village_weaponsmith')
         .randomChance(0.3)
         .addLoot('create:electron_tube');
});