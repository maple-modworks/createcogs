ServerEvents.recipes(event => {
	event.recipes.create.mechanical_crafting('ae2:controller', [
		' DDD ',
		'DRPRD',
		'DFCFD',
		'DRFRD',
		' DDD '
    ], {
		D: 'ae2:smooth_sky_stone_block',
		C: 'kubejs:radiant_mechanism',
		P: 'ae2:engineering_processor',
		F: 'ae2:fluix_crystal',
		R: 'create:refined_radiance'
    })
	event.recipes.create.mechanical_crafting('ae2:cell_component_256k', [
		' D D ',
		'DRPRD',
		' FCF ',
		'DRFRD',
		' D D '
    ], {
		D: 'ae2:smooth_sky_stone_block',
		C: 'kubejs:radiant_mechanism',
		P: 'ae2:calculation_processor',
		F: 'ae2:cell_component_64k',
		R: 'kubejs:refined_radiance_block'
    })
	

})
