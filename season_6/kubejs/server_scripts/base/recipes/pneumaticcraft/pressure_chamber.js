ServerEvents.recipes((event) => {
	const r = (inputs, pressure, results, stacked) =>
		event.custom({
			type: "pneumaticcraft:pressure_chamber",
			inputs: stacked
				? inputs.map((i) =>
					typeof i === "object"
						? { item: i.item, count: i.count, type: "pneumaticcraft:stacked_item" }
						: { item: i, count: 1, type: "pneumaticcraft:stacked_item" }
				  )
				: inputs.map((i) =>
					typeof i === "object" ? { item: i.item } : { item: i }
				  ), // Non-stacked inputs
			pressure: pressure,
			results: results.map((i) => ({ item: i })), // Map results properly
		});

	// Non-stacked recipes
	r(["createaddition:electrum_sheet", "minecraft:slime_ball"], 1.5, ["kubejs:incomplete_transistor"]);
	r(["createaddition:electrum_sheet", "minecraft:redstone"], 1.5, ["kubejs:incomplete_capacitor"]);
	r(["create:iron_sheet", "createdeco:andesite_sheet"], 2, ["pneumaticcraft:ingot_iron_compressed"]);
	r(["kubejs:light_bulb_base"],-0.5,["kubejs:light_bulb"])

	// Stacked example
	r(
		[
			{ item: "createaddition:electrum_sheet", count: 1 },
			{ item: "pneumaticcraft:plastic", count: 2 },
			{ item: "minecraft:redstone_torch", count: 2 }
		],
		2,
		["pneumaticcraft:empty_pcb"],
		true
	);
});
