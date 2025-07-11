ServerEvents.recipes((event) => {
	event.recipes.createDeploying("kubejs:silicon_template", ["kubejs:silicon_compound", "create:precision_mechanism"]);
	event.recipes.createDeploying([Item.of("create:electron_tube").withChance(0.4)], ["kubejs:graphite_electrode", "create:polished_rose_quartz"]); //yes this is a low chance, it is not meant to be the optimal way of producing these (more like a "i need one more and dont want to loot another dungeon" method)
});
