ServerEvents.recipes((event) => {
	const r = (ingredients, result) =>
		event.custom({
			type: "ae2:transform",
			circumstance: {
				type: "fluid",
				tag: "minecraft:water",
			},
			ingredients,
			result,
		});

	r(["ae2:certus_quartz_crystal", "minecraft:glowstone_dust", "create:refined_radiance"], "3x ae2:fluix_crystal");
	r(["ae2:certus_quartz_crystal", "glowstone_dust", "ae2:charged_certus_quartz_crystal"], "ae2:fluix_crystal");
});
