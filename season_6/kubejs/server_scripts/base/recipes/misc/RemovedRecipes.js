ServerEvents.recipes((event) => {
	//why pneumaticcraft, why do you not use a usable format
	[
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
		'create_enchantment_industry:hyper_experience',
		'create_enchantment_industry:printer',
		'create_enchantment_industry:disenchanter',
		'create:electron_tube',
		'createaddition:seed_oil',
		'create:tree_fertilizer',
		'create_new_age:nuclear_fuel',
		'create:rose_quartz',
		'createaddition:seed_oil',
		'createaddition:bioethanol',
		'createaddition:zinc_sheet'
	].forEach((output) => event.remove({ output: output }));

	event.remove({
		output: "createdieselgenerators:diesel",
		type: "createdieselgenerators:distillation",
	});
	event.remove({
		output: 'minecraft:redstone',
		type: 'create:filling'
	});
	//specific cases
	[
		"create_enchantment_industry:mixing/hyper_experience",
		"pneumaticcraft:explosion_crafting/compressed_iron_ingot",
		"pneumaticcraft:pressure_chamber/capacitor",
		"pneumaticcraft:pressure_chamber/transistor",
		"pneumaticcraft:printed_circuit_board",
		"pneumaticcraft:pressure_chamber/empty_pcb",
		"tconstruct:common/materials/steel_block_from_ingots",
		"createsa:obsidian_haunting",
		"createaddition:pressing/zinc_ingot",
		"createaddition:compacting/seed_oil",
		"createaddition:mixing/bioethanol"
	].forEach((id) => event.remove({id: id}));
	//remove recipes for pneumaticcraft's pneumatic armor
	['helmet', 'leggings', 'chestplate', 'boots'].forEach((piece) => event.remove({id: `pneumaticcraft:pneumatic_${piece}`}));

	event.replaceOutput({}, 'pneumaticcraft:biodiesel', 'createdieselgenerators:biodiesel');
	event.replaceInput({}, 'pneumaticcraft:biodiesel', 'createdieselgenerators:biodiesel');
	event.replaceOutput({}, 'pneumaticcraft:gasoline', 'createdieselgenerators:gasoline');
	event.replaceOutput({}, 'pneumaticcraft:diesel', 'createdieselgenerators:diesel');

	event.replaceOutput({}, 'tcontruct:steel_ingot', 'davebuildingmod:steel_ingot');

	event.replaceOutput({}, 'tconstruct:steel_block', 'davebuildingmod:steel_block');

	event.replaceInput({}, "createaddition:zinc_sheet", "createdeco:zinc_sheet")

});
