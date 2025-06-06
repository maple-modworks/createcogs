ItemEvents.tooltip((event) => {
	// TODO: when doing gamestages copy this list and lock everything except its contents
	[
		// all tradeable (not locked by gamestages) pneumaticcraft items
		"pneumaticcraft:pneumatic_helmet",
		"pneumaticcraft:pneumatic_chestplate",
		"pneumaticcraft:pneumatic_leggings",
		"pneumaticcraft:pneumatic_boots",
		"pneumaticcraft:minigun",

		// these should have tweaked recipes (unless i forgor) and should be harder to obtain
		"pneumaticcraft:jet_boots_upgrade_1",
		"pneumaticcraft:jet_boots_upgrade_2",
		"pneumaticcraft:jet_boots_upgrade_3",
		"pneumaticcraft:jet_boots_upgrade_4",
		"pneumaticcraft:jet_boots_upgrade_5",

		"pneumaticcraft:jumping_upgrade_1",
		"pneumaticcraft:jumping_upgrade_2",
		"pneumaticcraft:jumping_upgrade_3",
		"pneumaticcraft:jumping_upgrade_4",
		"pneumaticcraft:air_conditioning_upgrade",
		"pneumaticcraft:armor_upgrade",
		"pneumaticcraft:block_tracker_upgrade",
		"pneumaticcraft:charging_upgrade",
		"pneumaticcraft:chunkloader_upgrade",
		"pneumaticcraft:coordinate_tracker_upgrade",
		"pneumaticcraft:dispenser_upgrade",
		"pneumaticcraft:elytra_upgrade",
		"pneumaticcraft:ender_visor_upgrade",
		"pneumaticcraft:entity_tracker_upgrade",
		"pneumaticcraft:flippers_upgrade",
		"pneumaticcraft:gilded_upgrade",
		"pneumaticcraft:inventory_upgrade",
		"pneumaticcraft:item_life_upgrade",
		"pneumaticcraft:magnet_upgrade",
		"pneumaticcraft:minigun_upgrade",
		"pneumaticcraft:night_vision_upgrade",
		"pneumaticcraft:radiation_shielding_upgrade",
		"pneumaticcraft:range_upgrade",
		"pneumaticcraft:scuba_upgrade",
		"pneumaticcraft:search_upgrade",
		"pneumaticcraft:security_upgrade",
		"pneumaticcraft:speed_upgrade",
		"pneumaticcraft:standby_upgrade",
		"pneumaticcraft:stomp_upgrade",
		"pneumaticcraft:volume_upgrade",

		"pneumaticcraft:lpg_bucket",
		"pneumaticcraft:kerosene_bucket",
		"pneumaticcraft:ingot_iron_compressed", // TODO: remove (lock) this if necessary - can be replaced by unlocking steel to airsmiths
		"pneumaticcraft:drone",
		"pneumaticcraft:collector_drone",
		"pneumaticcraft:guard_drone",
		"pneumaticcraft:harvesting_drone",
		"pneumaticcraft:jackhammer", // TODO: remove and lock higher tier drill bits if necessary
		"pneumaticcraft:drill_bit_compressed_iron",
		"pneumaticcraft:drill_bit_diamond",
		"pneumaticcraft:drill_bit_iron",
		"pneumaticcraft:drill_bit_netherite",

		"pneumaticcraft:logistics_drone",
		"pneumaticcraft:vortex_cannon",

		"pneumaticcraft:gun_ammo",
		"pneumaticcraft:gun_ammo_ap",
		"pneumaticcraft:gun_ammo_explosive", // TODO:remove (lock) if considered too powerful
		"pneumaticcraft:gun_ammo_freezing",
		"pneumaticcraft:gun_ammo_incendiary",
		"pneumaticcraft:gun_ammo_weighted",
		"pneumaticcraft:drone_interface",
		"pneumaticcraft:programmer",
		"pneumaticcraft:sentry_turret",
		"pneumaticcraft:programming_puzzle",
		"pneumaticcraft:aerial_interface", // tradeable (not locked) since it requires the receiver to place it to work, recipe still only accessible to airsmiths
		"pneumaticcraft:air_canister",
		"pneumaticcraft:reinforced_air_canister",

		// The merchant block - most of these should only have recipes locked, as the merchant doesnt get access to that many profession specific items
		"createdieselgenerators:gasoline_bucket",
		"createdieselgenerators:diesel_bucket",
		"pneumaticcraft:kerosene_bucket",
		"pneumaticcraft:lpg_bucket",
		"create:asurine",
		"create:tuff",
		"create:ochrum", // TODO: these can be theoreticaly removed as they are available to everyone
		"createdieselgenerators:diesel_engine",
		"createdieselgenerators:large_diesel_engine",
		"createdieselgenerators:huge_diesel_engine",
		"davebuildingmod:steel_ingot",
		"createaddition:electrum_nugget",
		"createaddition:electrum_ingot",

		// The mechanic block
		// TODO: the merchant has mostly items that everyone has access to, so only recipes/some specific items should be locked
		"create:electron_tube",
		"create:cinder_flour",
		"create_sa:brass_jetpack_chestplate",
		"create_sa:andesite_jetpack_chestplate",
		"create_sa:copper_jetpack_chestplate",
		"create_sa:brass_exoskeleton_chestplate",
		"create_sa:andesite_exoskeleton_chestplate",
		"create_sa:copper_exoskeleton_chestplate",
		"create_sa:blazing_pickaxe",
		"create_sa:blazing_shovel",
		"create_sa:blazing_axe",
		"create_sa:blazing_cleaver",
		"create_sa:rose_quartz_pickaxe",
		"create_sa:rose_quartz_shovel",
		"create_sa:rose_quartz_axe",
		"create_sa:rose_quartz_sword",
		"create_sa:experience_pickaxe",
		"create_sa:experience_shovel",
		"create_sa:experience_axe",
		"create_sa:experience_sword",
		"create_sa:slime_boots",
		"create_sa:slime_helmet",
		"create_sa:portable_drill",
		"create_sa:grapplin_whisk",
		"create_sa:block_picker",
		"create_sa:heap_of_experience", // TODO: maybe remove this but dont lock it
		"create_sa:small_fueling_tank",
		"create_sa:medium_fueling_tank",
		"create_sa:large_fueling_tank",
		"create_sa:small_filling_tank",
		"create_sa:medium_filling_tank",
		"create_sa:large_filling_tank",
	].forEach((id) => event.add(id, Text.translate("tooltip.kubejs.tradeable").withStyle("gold")));

	event.add("cogutilities:empty_waste_barrel", Text.translate("tooltip.kubejs.building").withStyle("grey"));
	event.add("kubejs:light_bulb", Text.translate("tooltip.kubejs.light_bulb").withStyle("blue"));
	event.add("mbd2:steam_turbine", Text.translate("tooltip.kubejs.multiblock").withStyle("blue"));
	//this is in a loop because i suspect there will be more items soon...
	[
		"create:tree_fertilizer"
	].forEach((id) => event.add(id, Text.translate("tooltip.kubejs.removed").withStyle("red")));
});
