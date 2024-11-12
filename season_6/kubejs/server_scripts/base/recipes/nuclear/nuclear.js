ServerEvents.recipes(event => {
	event.recipes.createMixing([Fluid.of('kubejs:nuclear_waste', 100), Fluid.of('kubejs:nuclear_fuel', 100)], [
		Fluid.of('minecraft:water', 200),
		'create_new_age:radioactive_thorium',
		'kubejs:graphite_dust',
		'4x minecraft:glowstone_dust'])
})