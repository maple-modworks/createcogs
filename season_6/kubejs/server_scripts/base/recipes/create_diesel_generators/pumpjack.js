ServerEvents.recipes((event) => {
	event.recipes.create.mechanical_crafting(
		"createdieselgenerators:pumpjack_crank",
		// prettier-ignore
		[
			" Z ",
			" Z ",
			"SSS",
			"SMS",
			"AAA",
		],
		{
			Z: "create:zinc_ingot",
			S: "davebuildingmod:steel_ingot",
			M: "create:shaft",
			A: "create:andesite_alloy",
		}
	);
	event.shaped(
		"createdieselgenerators:pumpjack_bearing",
		// prettier-ignore
		[
			"ASA",
			"SMS",
			"ASA",
		],
		{
			A: "create:andesite_alloy",
			S: "davebuildingmod:steel_ingot",
			M: "create:mechanical_bearing",
		}
	);
	event.shaped(
		"createdieselgenerators:pumpjack_head",
		// prettier-ignore
		[
			"S S",
			"SRS",
			"S S"
		],
		{
			S: "davebuildingmod:steel_ingot",
			R: "#createcogs:ropes",
		}
	);
});
