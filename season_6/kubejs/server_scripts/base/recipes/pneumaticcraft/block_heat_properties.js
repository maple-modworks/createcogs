ServerEvents.recipes((event) => {
	const r = (fluid, temperature, thermalResistance, heatCapacity, transformCold) =>
		event.custom({
			type: "pneumaticcraft:heat_properties",
			fluid,
			temperature,
			thermalResistance,
			heatCapacity,
			transformCold,
		});

	r("kubejs:molten_steel", 1643, 100, 10000, { block: "minecraft:air" });
	r("kubejs:molten_slag", 1643, 100, 10000, { block: "minecraft:air" });
});
