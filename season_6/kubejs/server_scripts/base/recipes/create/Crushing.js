ServerEvents.recipes((event) => {
	event.recipes.createCrushing(
		["createdieselgenerators:wood_chip", Item.of("kubejs:graphite_dust").withChance(0.75)],
		"minecraft:charcoal",
	);
});
