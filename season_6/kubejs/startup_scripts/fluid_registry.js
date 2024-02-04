StartupEvents.registry('fluid', event => {
	event.create('destabilized_redstone')
		.displayName('Destabilized Redstone')
		.stillTexture('kubejs:block/destabilized_redstone_still')
		.flowingTexture('kubejs:block/destabilized_redstone_flow')
		.bucketColor('#8f0707')
		.noBlock()
})