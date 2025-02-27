ServerEvents.recipes((event) => {
	event.recipes.createDeploying("kubejs:silicon_template", ["kubejs:silicon_compound", "create:precision_mechanism"]);
});
