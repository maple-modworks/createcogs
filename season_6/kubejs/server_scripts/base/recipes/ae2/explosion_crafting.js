ServerEvents.recipes((event) => {
	event.custom({
		type: "ae2:transform",
		circumstance: {
			type: "explosion",
		},
		ingredients: [{ item: "create:iron_sheet" }, { item: "createdeco:andesite_sheet" }],
		result: {
			count: 1,
			item: "pneumaticcraft:ingot_iron_compressed",
		},
	});
});
