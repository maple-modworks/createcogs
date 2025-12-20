ServerEvents.recipes((event) => {
	event.recipes.createCrushing(
		["createdieselgenerators:wood_chip", "kubejs:graphite_dust", Item.of("kubejs:graphite_dust").withChance(0.2)],
		"minecraft:charcoal",
	);
	event.recipes.createCrushing(
		["kubejs:graphite_dust", Item.of("kubejs:graphite_dust").withChance(0.75)],
		"minecraft:coal",
	);
});
