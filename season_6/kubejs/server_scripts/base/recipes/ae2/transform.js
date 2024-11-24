ServerEvents.recipes((event) => {
	event.custom({
		type: "ae2:transform",
		circumstance: {
			type: "fluid",
			tag: "minecraft:water",
		},
		ingredients: [
			{ item: "ae2:certus_quartz_crystal" },
			{ item: "minecraft:glowstone_dust" },
			{ item: "create:refined_radiance" },
		],
		result: {
			count: 3,
			item: "ae2:fluix_crystal",
		},
	});
	event.custom({
		type: "ae2:transform",
		circumstance: {
			type: "fluid",
			tag: "minecraft:water",
		},
		ingredients: [
			{ item: "ae2:certus_quartz_crystal" },
			{ item: "minecraft:glowstone_dust" },
			{ item: "ae2:charged_certus_quartz_crystal" },
		],
		result: {
			count: 1,
			item: "ae2:fluix_crystal",
		},
	});
});
