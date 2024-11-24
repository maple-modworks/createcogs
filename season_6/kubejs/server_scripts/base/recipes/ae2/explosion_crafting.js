ServerEvents.recipes((event) => {
	const r = (ingredients, result) =>
		event.custom({
			type: "ae2:transform",
			circumstance: {
				type: "explosion",
			},
			ingredients,
			result,
		});

	r(["create:iron_sheet", "createdeco:andesite_sheet"], "pneumaticcraft:ingot_iron_compressed");
});
