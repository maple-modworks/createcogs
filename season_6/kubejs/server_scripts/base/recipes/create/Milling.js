ServerEvents.recipes((event) => {
	event.recipes.createMilling([Item.of("ae2:certus_quartz_dust").withChance(0.05)], "minecraft:sand");
	event.recipes.createMilling([Item.of("kubejs:graphite_dust").withChance(0.5)], "minecraft:charcoal");
	event.recipes.createMilling([Item.of("kubejs:graphite_dust").withChance(0.5)], "minecraft:coal");
});
