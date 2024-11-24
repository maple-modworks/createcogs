ServerEvents.recipes((event) => {
	event.custom({
		type: "pneumaticcraft:pressure_chamber",
		inputs: [{ item: "createaddition:electrum_sheet" }, { item: "minecraft:slime_ball" }],
		pressure: 1.5,
		results: [{ item: "kubejs:incomplete_capacitor" }],
	});
	event.custom({
		type: "pneumaticcraft:pressure_chamber",
		inputs: [{ item: "createaddition:electrum_sheet" }, { item: "minecraft:redstone" }],
		pressure: 1.5,
		results: [{ item: "kubejs:incomplete_transistor" }],
	});
	event.custom({
		type: "pneumaticcraft:pressure_chamber",
		inputs: [
			{
				type: "pneumaticcraft:stacked_item",
				count: 1,
				item: "createaddition:electrum_sheet",
			},
			{
				type: "pneumaticcraft:stacked_item",
				count: 2,
				item: "pneumaticcraft:plastic",
			},
			{
				type: "pneumaticcraft:stacked_item",
				count: 2,
				item: "minecraft:redstone_torch",
			},
		],
		pressure: 2,
		results: [{ item: "pneumaticcraft:empty_pcb" }],
	});
	event.custom({
		type: "pneumaticcraft:pressure_chamber",
		inputs: [{ item: "create:iron_sheet" }, { item: "createdeco:andesite_sheet" }],
		pressure: 2,
		results: [{ item: "pneumaticcraft:ingot_iron_compressed" }],
	});
});
