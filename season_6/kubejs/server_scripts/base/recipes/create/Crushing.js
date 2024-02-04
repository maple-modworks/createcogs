ServerEvents.recipes((event) => {
event.recipes.createCrushing([
		'kubejs:sawdust',
		Item.of('kubejs:graphite_dust').withChance(0.5)
	], 'minecraft:charcoal'),
event.recipes.createCrushing([
    	'4x kubejs:sawdust',
    	Item.of('minecraft:stick').withChance(0.25)
    ], 'minecraft:oak_planks')
})