ServerEvents.recipes((event) => {
	const r = (inputs, pressure, results, stacked) =>
		event.custom({
			type: "pneumaticcraft:pressure_chamber",
			inputs: !!stacked
				? inputs.map((i) => ({ item: i, count: 1, type: "pneumaticcraft:stacked_item" }))
				: inputs,
			pressure,
			results,
		});

	r(["createaddition:electrum_sheet", "minecraft:slime_ball"], 1.5, ["kubejs:incomplete_transistor"]);
	r(["createaddition:electrum_sheet", "minecraft:redstone"], 1.5, ["kubejs:incomplete_transistor"]);
	r(["create:iron_sheet", "createdeco:andesite_sheet"], 2, ["pneumaticcraft:ingot_iron_compressed"]);

	// this is stacked, whatever that means.
	r(
		["createaddition:electrum_sheet", "pneumaticcraft:plastic", "minecraft:redstone_torch"],
		2,
		["pneumaticcraft:empty_pcb"],
		true
	);
});
