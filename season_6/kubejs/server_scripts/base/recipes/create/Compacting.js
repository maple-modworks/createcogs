ServerEvents.recipes((event) => {
	event.recipes
		.createCompacting("create:ochrum", [Fluid.of("createdieselgenerators:diesel", 200), "minecraft:stone"])
		.heated();
	event.recipes
		.createCompacting("create:ochrum", [Fluid.of("createdieselgenerators:gasoline", 200), "minecraft:stone"])
		.heated();
	event.recipes
		.createCompacting("create:asurine", [Fluid.of("pneumaticcraft:kerosene", 200), "minecraft:stone"])
		.heated();
	event.recipes
		.createCompacting("create:crimsite", [Fluid.of("kubejs:crimson_essence", 200), "minecraft:stone"])
		.heated();
	event.recipes
		.createCompacting("minecraft:tuff", [
			Fluid.of("pneumaticcraft:lpg", 50),
			Fluid.of("createdieselgenerators:gasoline", 50),
			Fluid.of("pneumaticcraft:kerosene", 50),
			Fluid.of("createdieselgenerators:diesel", 50),
			"minecraft:stone",
		])
		.heated();
});
