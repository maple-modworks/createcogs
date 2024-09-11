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
    }),
	event.recipes.create.mechanical_crafting('pneumaticcraft:uv_light_box', [
		' LRL ',
		' CBP ',
		' CTC '
	], {
		B: 'pneumaticcraft:pcb_blueprint',
		R: 'kubejs:refined_radiance_block',
		L: 'minecraft:redstone_lamp',
		C: 'pneumaticcraft:ingot_iron_compressed',
		P: 'pneumaticcraft:pressure_tube',
		T: 'kubejs:silicon_template'
	}),
	event.recipes.create.mechanical_crafting('create_dd:furnace_engine', [
		'  BES',
		'FCNHK',
		'  BES'
	], {
		B: 'create:brass_ingot',
		S: 'createdeco:andesite_sheet',
		E: 'create:electron_tube',
		H: 'create_sa:heat_engine',
		N: 'create:steam_engine',
		K: 'create:andesite_alloy_block',
		F: 'create:shaft',
		C: 'create:brass_sheet'
	}),
	event.recipes.create.mechanical_crafting('create_sa:andesite_jetpack_chestplate', [
		' B B ',
		'CIAIC',
		'FTSTF',
		' FHF '
	], {
		B: 'create:belt_connector',
		C: 'create:cogwheel',
		I: 'create:zinc_ingot',
		A: 'create:andesite_alloy_block',
		F: 'create:encased_fan',
		T: 'create_sa:small_fueling_tank',
		S: 'create:steam_engine',
		H: 'create_sa:heat_engine'
	}),
	event.recipes.create.mechanical_crafting('create_sa:brass_jetpack_chestplate', [
		' L L ',
		'CABOC',
		'FTSTF',
		' IEI '
	], {
		B: 'create:brass_block',
		A: 'create_sa:heat_engine',
		O: 'create_sa:hydraulic_engine',
		L: 'create:large_cogwheel',
		C: 'create:electron_tube',
		F: 'create:encased_fan',
		T: 'create_sa:small_fueling_tank',
		I: 'create_sa:small_filling_tank',
		E: 'create_sa:steam_engine',
		S: 'create:steam_engine'
	}),
	event.recipes.create.mechanical_crafting('create_sa:copper_jetpack_chestplate', [
		'PIBIP',
		'HTLTH',
		'P A P'
	], {
		P: 'create:fluid_pipe',
		I: 'minecraft:copper_ingot',
		B: 'minecraft:copper_block',
		H: 'create_sa:hydraulic_engine',
		T: 'create_sa:small_filling_tank',
		L: 'create:large_cogwheel',
		A: 'create:andesite_alloy'
	})
})
