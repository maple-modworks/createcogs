StartupEvents.registry('fluid', event => {
	event.create('crimson_essence')
		.displayName('Crimson Essence')
		.stillTexture('kubejs:block/destabilized_redstone_still')
		.flowingTexture('kubejs:block/destabilized_redstone_flow')
		.bucketColor('#8f0707')
		.noBlock(),
	event.create('soul_tears')
		.displayName('Soul Tears')
		.stillTexture('kubejs:block/soul_tears_still')
		.flowingTexture('kubejs:block/soul_tears_flow')
		.bucketColor('#422fa5')
		.noBlock(),
	event.create('molten_steel')
		.displayName('Molten Steel')
		.luminosity(15)
		.viscosity(6000)
		.temperature(1500)
		.noBucket()
		.stillTexture('kubejs:block/molten_steel_still')
		.flowingTexture('kubejs:block/molten_steel_flow'),
	event.create('molten_slag')
		.displayName('Molten Slag')
		.luminosity(15)
		.viscosity(6000)
		.temperature(1500)
		.noBucket()
		.stillTexture('kubejs:block/molten_slag_still')
		.flowingTexture('kubejs:block/molten_slag_flow'),
	event.create('steel_blend')
		.displayName('Steel Blend')
		.noBlock()
		.stillTexture('kubejs:block/steel_blend')
		.flowingTexture('kubejs:block/steel_blend')
})