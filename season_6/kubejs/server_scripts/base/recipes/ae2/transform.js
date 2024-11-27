ServerEvents.recipes((event) => {
	const r = (ingredients, result, count) =>
		event.custom({
			type: "ae2:transform",
			circumstance: {
				type: "fluid",
				tag: "minecraft:water",
			},
			ingredients: ingredients.map((i) => ({ item: i})),
			result: {item: result, count: count || 1},
		});

	r(["nether_quartz", "minecraft:glowstone_dust", "create:refined_radiance"], "ae2:fluix_crystal", 3);
	r(["nether_quartz", "redstone_dust", "ae2:charged_certus_quartz_crystal"], "ae2:fluix_crystal");
});
