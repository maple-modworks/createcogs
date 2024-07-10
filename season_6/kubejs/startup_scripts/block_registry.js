StartupEvents.registry('block', event => {
	event.create('andesite_trophy')
		.defaultCutout()
		.box(4, 0, 4, 12, 16, 12, true)
	event.create('refined_radiance_block').item(item => {item.glow(true)})
})