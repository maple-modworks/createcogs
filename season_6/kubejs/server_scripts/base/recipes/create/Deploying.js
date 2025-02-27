ServerEvents.recipes((event) => {
	event.recipes.createDeploying("kubejs:silicon_template", ["kubejs:silicon_compound", "create:precision_mechanism"]);
	event.recipes.createDeploying("kubejs:light_bulb",["kubejs:light_bulb_base","minecraft:glowstone_dust"])
});
