LootJS.modifiers((event) => {
	event
		.addLootTableModifier(
			"chests/village/village_weaponsmith",
			"chests/abandoned_mineshaft",
			"chests/ancient_city",
			"chests/buried_treasure",
			"chests/shipwreck_treasure",
			"chests/jungle_temple",
			"chests/ruined_portal",
			"chests/underwater_ruin_big",
			"chests/underwater_ruin_small",
			"chests/woodland_mansion"
		)
		.pool((pool) => {
			pool.rolls([1, 3]);
			pool.randomChance(0.3);
			pool.addLoot("create:electron_tube");
		});
	event
		.addLootTableModifier(
			"chests/village/village_weaponsmith",
			"chests/abandoned_mineshaft",
			"chests/ancient_city",
			"chests/buried_treasure",
			"chests/shipwreck_treasure",
			"chests/jungle_temple",
			"chests/ruined_portal",
			"chests/underwater_ruin_big",
			"chests/underwater_ruin_small",
			"chests/woodland_mansion"
		)
		.pool((pool) => {
			pool.rolls([1, 3]);
			pool.randomChance(0.3);
			pool.addLoot("create:brass_hand");
		});
	event
		.addLootTableModifier(
			"chests/bastion_treasure",
			"chests/end_city_treasure",
			"chests/stronghold_library"
		)
		.pool((pool) => {
			pool.rolls([1, 3]);
			pool.randomChance(0.5);
			pool.addLoot("create:electron_tube");
		});
	event
		.addLootTableModifier(
			"chests/bastion_treasure",
			"chests/end_city_treasure",
			"chests/stronghold_library"
		)
		.pool((pool) => {
			pool.rolls([1, 3]);
			pool.randomChance(0.5);
			pool.addLoot("create:brass_hand");
		});
	event
		.addEntityLootModifier(
			"minecraft:creeper",
			"minecraft:zombie",
			"minecraft:skeleton",
			"minecraft:drowned",
			"minecraft:spider",
			"minecraft:cave_spider",
			"minecraft:ghast",
			"minecraft:wither_skeleton",
			"minecraft:blaze"
		)
		.pool((pool) => {
			pool.rolls([1, 2]);
			pool.randomChance(0.2).addLoot("numismatics:spur");
		});
	event.addEntityLootModifier("minecraft:witch").pool((pool) => {
		pool.rolls([1, 1]);
		pool.randomChance(0.4).addLoot("numismatics:bevel");
	});
	event.addEntityLootModifier("minecraft:pillager", "minecraft:evoker").pool((pool) => {
		pool.rolls([1, 1]);
		pool.randomChance(0.1).addLoot("numismatics:sprocket");
	});
	event.addEntityLootModifier("minecraft:ender_dragon", "minecraft:wither").pool((pool) => {
		pool.rolls([1, 3]);
		pool.randomChance(0.2).addLoot("numismatics:crown");
	});
});
