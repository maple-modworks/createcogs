ServerEvents.recipes((event) => {
	event.recipes.createCutting("3x pneumaticcraft:ingot_iron_compressed", "davebuildingmod:steel_ingot");

	Ingredient.of('#minecraft:planks').itemIds.forEach(plankId => {
		if (!plankId.endsWith('_planks')) return
		const slabId = plankId.replace('_planks', '_slab')

		if (!Item.exists(slabId)) return

		event.recipes.createCutting(
		Item.of(slabId, 2),
		plankId
		)
	});
});
