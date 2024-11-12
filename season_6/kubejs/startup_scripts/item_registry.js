StartupEvents.registry('item', event => {
	
	//standard items list
	const items = [
		'compressed_mechanism',
		'graphite_dust',
		'sawdust',
		'graphite_ingot',
		'graphite_electrode',
		'light_bulb',
		'silicon_template',
		'silicon_compound',
		'incomplete_transistor',
		'incomplete_capacitor',
		'light_bulb_base'
	]
	//incomplete items list
	const iItems = [
		'incomplete_compressed_mechanism',
		'incomplete_electron_tube',
		'incomplete_graphite_electrode',
		'incomplete_light_bulb',
		'incomplete_fluid_pipe',
		'almost_assembled_pcb'
	]
	
	//standard items creation
	items.forEach(output => {
		event.create(output)
	})
	
	//incomplete items creation
	iItems.forEach(output => {
		event.create(output, 'create:sequenced_assembly')
	})
	//specific scenarios
	event.create('radiant_mechanism').glow(true).displayName('Radiant Core'),
	event.create('mod_token').glow(true),
	event.create('incomplete_graphite_ingot', 'create:sequenced_assembly').displayName('Almost Solid Graphite Dust')
	event.create('incomplete_radiant_mechanism', 'create:sequenced_assembly').displayName('Incomplete Radiant Core')
	
	event.create('test_item')
})  