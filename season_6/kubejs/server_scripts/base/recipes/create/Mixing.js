ServerEvents.recipes((event) => {
	event.recipes.createMixing([Fluid.of('kubejs:destabilized_redstone',250)],[
		Fluid.of('minecraft:lava', 500),
		'3x minecraft:redstone'
	]).heated()
})