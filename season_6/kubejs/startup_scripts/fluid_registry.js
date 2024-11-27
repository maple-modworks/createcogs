StartupEvents.registry("fluid", (event) => {
	event
		.create("crimson_essence")
		.displayName("Crimson Essence")
		.stillTexture("kubejs:block/destabilized_redstone_still")
		.flowingTexture("kubejs:block/destabilized_redstone_flow")
		.bucketColor("#8f0707")
		.noBlock();
	event
		.create("soul_tears")
		.displayName("Soul Tears")
		.stillTexture("kubejs:block/soul_tears_still")
		.flowingTexture("kubejs:block/soul_tears_flow")
		.bucketColor("#422fa5")
		.noBlock();
	event
		.create("molten_steel")
		.displayName("Molten Steel")
		.luminosity(1)
		.viscosity(6000)
		.temperature(1500)
		.noBucket()
		.stillTexture("kubejs:block/molten_steel_still")
		.flowingTexture("kubejs:block/molten_steel_flow");
	event
		.create("molten_slag")
		.displayName("Molten Slag")
		.luminosity(1)
		.viscosity(6000)
		.temperature(1500)
		.noBucket()
		.stillTexture("kubejs:block/molten_slag_still")
		.flowingTexture("kubejs:block/molten_slag_flow");
	event
		.create("steel_blend")
		.displayName("Steel Blend")
		.noBlock()
		.stillTexture("kubejs:block/steel_blend")
		.flowingTexture("kubejs:block/steel_blend");
	event
		.create("nuclear_fuel")
		.displayName("Nuclear Fuel")
		.stillTexture("kubejs:fluid/nuclear_fuel_still")
		.flowingTexture("kubejs:fluid/nuclear_fuel_flow")
		.luminosity(1)
		.temperature(1500)
		.bucketColor("#c4fced");
	event
		.create("nuclear_waste")
		.displayName("Nuclear Waste")
		.stillTexture("kubejs:fluid/nuclear_waste_still")
		.flowingTexture("kubejs:fluid/nuclear_waste_flow")
		.luminosity(1)
		.temperature(1500)
		.bucketColor("#a4ff36");
	event
		.create("steam")
		.displayName("Steam")
		.stillTexture("kubejs:fluid/steam")
		.flowingTexture("kubejs:fluid/steam")
		.noBlock()
		.noBucket();
});
