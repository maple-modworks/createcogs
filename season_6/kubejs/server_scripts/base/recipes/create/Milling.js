ServerEvents.recipes((event) => {
	event.recipes.createMilling([Item.of('ae2:certus_quartz_dust').withChance(0.05)], 'minecraft:sand')
})