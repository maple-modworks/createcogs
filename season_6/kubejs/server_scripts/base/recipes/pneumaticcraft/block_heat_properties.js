ServerEvents.recipes((event) => {
	event.custom({
		type: "pneumaticcraft:heat_properties",
		fluid: "kubejs:molten_steel",
		temperature: 1643,
		thermalResistance: 100,
		heatCapacity: 10000,
		transformCold: { block: "minecraft:air" },
	});
	event.custom({
		type: "pneumaticcraft:heat_properties",
		fluid: "kubejs:molten_slag",
		temperature: 1643,
		thermalResistance: 100,
		heatCapacity: 10000,
		transformCold: { block: "minecraft:air" },
	});
});
