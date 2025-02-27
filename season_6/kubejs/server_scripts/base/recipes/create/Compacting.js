ServerEvents.recipes((event) => {
	event.recipes
		.createCompacting("create:ochrum", [Fluid.of("create:honey", 200), Fluid.of("minecraft:lava",1000)])
		.heated();
	event.recipes
		.createCompacting("create:asurine", [Fluid.of("kubejs:soul_tears", 200), Fluid.of("minecraft:lava",1000)])
		.heated();
	event.recipes
		.createCompacting("create:crimsite", [Fluid.of("kubejs:crimson_essence", 200), Fluid.of("minecraft:lava",1000)])
		.heated();
	event.recipes
		.createCompacting("minecraft:tuff", [
			Fluid.of("minecraft:lava", 1000),
			"4x supplementaries:ash",
		])
		.heated();
});
