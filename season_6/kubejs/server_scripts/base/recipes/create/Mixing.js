ServerEvents.recipes((event) => {
	event.recipes.createMixing([Fluid.of('kubejs:destabilized_redstone',250)],[
		Fluid.of('minecraft:lava', 500),
		'3x minecraft:redstone'
	]).heated(),
	event.recipes.createMixing('create:chromatic_compound',[
		'4x minecraft:glowstone_dust',
		'3x create:powdered_obsidian',
		'3x kubejs:graphite_ingot'
	])
})