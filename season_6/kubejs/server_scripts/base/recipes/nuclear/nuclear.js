ServerEvents.recipes((event) => {
	event.recipes.createMixing(
		[Fluid.of("kubejs:nuclear_waste", 100), Fluid.of("kubejs:nuclear_fuel", 100)],
		[
			Fluid.of("minecraft:water", 200),
			"create_new_age:radioactive_thorium",
			"kubejs:graphite_dust",
			"4x minecraft:glowstone_dust",
		],
	);
	//TODO: might change the input item
	event.recipes.createFilling(
		"create_new_age:nuclear_fuel",
		[Fluid.of("kubejs:nuclear_fuel", 100), "minecraft:iron_ingot"]
	);
	//hyper experience - TODO: tweaks neccessary
	event.recipes.createMixing(
		Fluid.of("create_enchantment_industry:hyper_experience", 100),
		[
			"create_new_age:radioactive_thorium",
			"kubejs:hraphite_ingot",
			Fluid.of("create_enchantment_industry:liquid_experience", 150)
		]
	);
});
