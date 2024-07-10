StartupEvents.registry('fluid', event => {
	event.create('destabilized_redstone')
		.displayName('Destabilized Redstone')
		.stillTexture('kubejs:block/destabilized_redstone_still')
		.flowingTexture('kubejs:block/destabilized_redstone_flow')
		.bucketColor('#8f0707')
		.noBlock(),
	event.create('soul_tears')
		.displayName('Soul Tears')
		.stillTexture('kubejs:block/soul_tears_still')
		.flowingTexture('kubejs:block/soul_tears_flow')
		.bucketColor('#422fa5')
		.noBlock()
})