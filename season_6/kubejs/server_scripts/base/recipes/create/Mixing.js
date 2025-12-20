ServerEvents.recipes((event) => {
	event.recipes.createMixing("create:chromatic_compound", [
		"4x minecraft:glowstone_dust",
		"3x create:powdered_obsidian",
		"3x kubejs:graphite_ingot",
	]);
	event.recipes
		.createMixing("kubejs:silicon_compound", [
			Fluid.of("minecraft:water", 1000),
			"2x minecraft:clay_ball",
			"minecraft:sand",
			"ae2:certus_quartz_dust",
		])
		.heated();
	event.recipes.createMixing("3x createdieselgenerators:asphalt_block", [
		Fluid.of("kubejs:molten_slag", 100),
		"minecraft:sand",
		"minecraft:gravel",
	]);
	event.recipes.createMixing("davebuildingmod:steel_ingot", [Fluid.of("kubejs:molten_steel", 250)]);
	event.recipes.createMixing(
		[Fluid.of("kubejs:steel_blend", 250)],
		["create:crushed_raw_iron", "kubejs:graphite_dust"],
	);
	event.recipes.createMixing(
		[Fluid.of("kubejs:steel_blend", 750)],
		["2x create:crushed_raw_iron", "3x #minecraft:coals"],
	);

	event.recipes.createMixing(
		[Fluid.of("kubejs:steel_blend", 250)],
		["minecraft:iron_ingot", "kubejs:graphite_dust"],
	);
	event.recipes.createMixing(
		[Fluid.of("kubejs:steel_blend", 750)],
		["2x minecraft:iron_ingot", "3x #minecraft:coals"],
	);

	event.recipes.createMixing(
		[Fluid.of("kubejs:crimson_essence", 250)],
		[
			"2x minecraft:clay_ball",
			Fluid.of("minecraft:lava", 250),
			"2x minecraft:glowstone_dust",
			"3x minecraft:redstone",
		],
	);
	event.recipes
		.createMixing("3x minecraft:redstone", [
			"createaddition:electrum_nugget",
			"create:cinder_flour",
			"kubejs:graphite_dust",
		])
		.heated();
	event.recipes
		.createMixing("minecraft:redstone", [
			"create:cinder_flour",
			"kubejs:graphite_dust",
		])
		.superheated();
	
	event.recipes.createMixing("create:blaze_cake_base", [
		Fluid.of("createdieselgenerators:plant_oil", 300),
		"minecraft:sugar",
		"create:cinder_flour",
	]);
	event.recipes
		.createMixing("2x create_new_age:thorium", [
			"minecraft:glowstone",
			"create_new_age:thorium",
			"kubejs:graphite_ingot",
			Fluid.of("minecraft:water", 500),
		])
		.superheated();
	event.recipes.createMixing("2x create_new_age:thorium", [
		"create:refined_radiance",
		"create_new_age:thorium",
		"kubejs:graphite_ingot",
		Fluid.of("minecraft:water", 500),
	]);
	event.recipes.createMixing("8x createdieselgenerators:asphalt_block", [
		"cogutilities:decayed_waste_barrel",
		"4x minecraft:sand",
		"4x minecraft:gravel",
	]);
});
