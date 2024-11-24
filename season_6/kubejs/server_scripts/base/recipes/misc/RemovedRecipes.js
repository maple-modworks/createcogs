ServerEvents.recipes((event) => {
	//why pneumaticcraft, why do you not use a usable format
	const rRecipes = [
		"ae2:fluix_crystal",
		"ae2:controller",
		"ae2:cell_component_4k",
		"ae2:cell_component_16k",
		"ae2:cell_component_64k",
		"ae2:cell_component_256k",
		"pneumaticcraft:uv_light_box",
		"create:blaze_cake_base",
		"create_sa:flamethrower",
		"create_sa:copper_jetpack_chestplate",
		"create_sa:andesite_jetpack_chestplate",
		"create_sa:brass_jetpack_chestplate",
		"create_new_age:thorium",
		"create_sa:steam_engine",
		"createdieselgenerators:pumpjack_crank",
		"createdieselgenerators:pumpjack_head",
		"createdieselgenerators:pumpjack_bearing",
	];
	rRecipes.forEach((output) => event.remove({ output: output }));

	event.remove({
		type: "pneumaticcraft:pressure_chamber",
		output: "pneumaticcraft:ingot_iron_compressed",
	});
	event.remove({
		output: "createdieselgenerators:diesel",
		type: "createdieselgenerators:distillation",
	});
	event.remove({ mod: "create_dd" });
	event.remove({ output: "minecraft:redstone", type: "create:filling" });
	event.remove({ id: "pneumaticcraft:explosion_crafting/compressed_iron_ingot" });
	event.remove({ output: "pneumaticcraft:ingot_iron_compressed" });
});
