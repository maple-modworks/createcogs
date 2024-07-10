LootJS.modifiers(event => {
	event.addLootTableModifier('chests/village/village_weaponsmith')
        .randomChance(0.3)
        .addLoot('create:electron_tube');
	event.addEntityLootModifier("minecraft:creeper", "minecraft:zombie", "minecraft:skeleton", "minecraft:drowned", "minecraft:spider", "minecraft:cave_spider", "minecraft:ghast", "minecraft:wither_skeleton", "minecraft:blaze").pool((pool) => {
        pool.rolls([1,2]);
		pool.randomChance(0.2)
		.addLoot("jackseconomy:nickel");
	});
	event.addEntityLootModifier("minecraft:witch").pool((pool) => {
        pool.rolls([1,1]);
		pool.randomChance(0.2)
		.addLoot("jackseconomy:dollar_bill");
	});
	event.addEntityLootModifier("minecraft:pillager", "minecraft:evoker").pool((pool) => {
        pool.rolls([1,1]);
		pool.randomChance(0.1)
		.addLoot("jackseconomy:ten_dollar_bill");
	});
	event.addEntityLootModifier("minecraft:ender_dragon", "minecraft:wither").pool((pool) => {
        pool.rolls([1,3]);
		pool.randomChance(0.2)
		.addLoot("jackseconomy:fifty_dollar_bill");
	});
});