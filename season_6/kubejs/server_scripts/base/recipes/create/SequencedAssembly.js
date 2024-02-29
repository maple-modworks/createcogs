ServerEvents.recipes((event) => {
event.recipes.createSequencedAssembly([ // start the recipe
		Item.of('kubejs:compressed_mechanism').withChance(130.0), // this is the item that will appear in JEI as the result
		Item.of('create:golden_sheet').withChance(8.0), // the rest of these items will part of the scrap
		Item.of('create:andesite_alloy').withChance(8.0),
		Item.of('create:cogwheel').withChance(5.0),
		Item.of('create:shaft').withChance(2.0),
		Item.of('create:crushed_gold_ore').withChance(2.0),
		Item.of('2x gold_nugget').withChance(2.0),
		'iron_ingot',
		'clock'
	],'create:precision_mechanism',[ // 'create:golden_sheet' is the input
		// the transitional item set by "transitionalItem('create:incomplete_large_cogwheel')" is the item used during the intermediate stages of the assembly
		event.recipes.createDeploying('kubejs:incomplete_compressed_mechanism',['kubejs:incomplete_compressed_mechanism','pneumaticcraft:pressure_tube']),
 	 	// like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item
		event.recipes.createCutting('kubejs:incomplete_compressed_mechanism','kubejs:incomplete_compressed_mechanism'),
		event.recipes.createDeploying('kubejs:incomplete_compressed_mechanism',['kubejs:incomplete_compressed_mechanism','#forge:glass']),
		event.recipes.createPressing('kubejs:incomplete_compressed_mechanism','kubejs:incomplete_compressed_mechanism')
	]).transitionalItem('kubejs:incomplete_compressed_mechanism').loops(5) // set the transitional item and the loops (amount of repetitions)

event.recipes.createSequencedAssembly([ // start the recipe
		Item.of('minecraft:hopper').withChance(130.0), // this is the item that will appear in JEI as the result

	],'minecraft:chest',[ // 'create:golden_sheet' is the input
		// the transitional item set by "transitionalItem('create:incomplete_large_cogwheel')" is the item used during the intermediate stages of the assembly
		event.recipes.createDeploying('minecraft:chest',['minecraft:chest','minecraft:iron_ingot']),
 	 	// like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item
		event.recipes.createCutting('minecraft:chest','minecraft:chest')
	]).transitionalItem('minecraft:chest').loops(3) // set the transitional item and the loops (amount of repetitions)

event.recipes.createSequencedAssembly([ // start the recipe
		Item.of('create:electron_tube').withChance(130.0), // this is the item that will appear in JEI as the result
		Item.of('kubejs:graphite_electrode').withChance(8.0), // the rest of these items will part of the scrap
		Item.of('create:iron_sheet').withChance(8.0),
		Item.of('kubejs:light_bulb').withChance(5.0),
	],'kubejs:graphite_electrode',[ // 'create:golden_sheet' is the input
		// the transitional item set by "transitionalItem('create:incomplete_large_cogwheel')" is the item used during the intermediate stages of the assembly
		event.recipes.createFilling('kubejs:incomplete_electron_tube',['kubejs:incomplete_electron_tube', Fluid.of('kubejs:destabilized_redstone', 500)]),
		event.recipes.createPressing('kubejs:incomplete_electron_tube','kubejs:incomplete_electron_tube')
	]).transitionalItem('kubejs:incomplete_electron_tube').loops(3) // set the transitional item and the loops (amount of repetitions)



event.recipes.createSequencedAssembly([ // start the recipe
		Item.of('kubejs:graphite_electrode').withChance(130.0), // this is the item that will appear in JEI as the result
		Item.of('kubejs:graphite_dust').withChance(8.0), // the rest of these items will part of the scrap
		Item.of('create:iron_sheet').withChance(8.0),
		Item.of('kubejs:graphite_ingot').withChance(5.0),
	],'kubejs:graphite_ingot',[ // 'create:golden_sheet' is the input
		// the transitional item set by "transitionalItem('create:incomplete_large_cogwheel')" is the item used during the intermediate stages of the assembly
		event.recipes.createCutting('kubejs:incomplete_graphite_electrode', 'kubejs:incomplete_graphite_electrode'),
		event.recipes.createDeploying('kubejs:incomplete_graphite_electrode', ['kubejs:incomplete_graphite_electrode', 'create:iron_sheet']),
		event.recipes.createDeploying('kubejs:incomplete_graphite_electrode', ['kubejs:incomplete_graphite_electrode', 'minecraft:iron_nugget'])
	]).transitionalItem('kubejs:incomplete_electron_tube').loops(3) // set the transitional item and the loops (amount of repetitions)

event.recipes.createSequencedAssembly([ // start the recipe
		Item.of('kubejs:light_bulb').withChance(130.0), // this is the item that will appear in JEI as the result
		Item.of('minecraft:glass').withChance(8.0), // the rest of these items will part of the scrap
		Item.of('create:iron_sheet').withChance(8.0),
		Item.of('kubejs:graphite_electrode').withChance(5.0),
	],'kubejs:graphite_electrode',[ // 'create:golden_sheet' is the input
		// the transitional item set by "transitionalItem('create:incomplete_large_cogwheel')" is the item used during the intermediate stages of the assembly
		event.recipes.createDeploying('kubejs:incomplete_light_bulb', ['kubejs:incomplete_light_bulb', '#forge:glass']),
		event.recipes.createPressing('kubejs:incomplete_light_bulb', 'kubejs:incomplete_light_bulb')
	]).transitionalItem('kubejs:incomplete_light_bulb').loops(3) // set the transitional item and the loops (amount of repetitions)

event.recipes.createSequencedAssembly([ // start the recipe
		Item.of('pneumaticcraft:ingot_iron_compressed').withChance(130.0), // this is the item that will appear in JEI as the result
		Item.of('create:andesite_alloy').withChance(8.0), // the rest of these items will part of the scrap
		Item.of('create:iron_sheet').withChance(8.0),
	],'create:andesite_alloy',[ // 'create:golden_sheet' is the input
		// the transitional item set by "transitionalItem('create:incomplete_large_cogwheel')" is the item used during the intermediate stages of the assembly
		event.recipes.createDeploying('kubejs:incomplete_compressed_iron', ['kubejs:incomplete_compressed_iron', 'create:iron_sheet']),
		event.recipes.createPressing('kubejs:incomplete_compressed_iron', 'kubejs:incomplete_compressed_iron'),
		event.recipes.createPressing('kubejs:incomplete_compressed_iron', 'kubejs:incomplete_compressed_iron'),
		event.recipes.createPressing('kubejs:incomplete_compressed_iron', 'kubejs:incomplete_compressed_iron')
	]).transitionalItem('kubejs:incomplete_compressed_iron').loops(1) // set the transitional item and the loops (amount of repetitions)

event.recipes.createSequencedAssembly([ // start the recipe
		Item.of('16x create:fluid_pipe').withChance(130.0), // this is the item that will appear in JEI as the result
		//Item.of('create:copper_sheet').withChance(8.0), // the rest of these items will part of the scrap
		//Item.of('create:iron_sheet').withChance(8.0),
	],'minecraft:copper_block',[ // 'create:golden_sheet' is the input
		// the transitional item set by "transitionalItem('create:incomplete_large_cogwheel')" is the item used during the intermediate stages of the assembly
		event.recipes.createCutting('kubejs:incomplete_fluid_pipe', 'kubejs:incomplete_fluid_pipe'),
		event.recipes.createPressing('kubejs:incomplete_fluid_pipe', 'kubejs:incomplete_fluid_pipe'),
		event.recipes.createPressing('kubejs:incomplete_fluid_pipe', 'kubejs:incomplete_fluid_pipe')
	]).transitionalItem('kubejs:incomplete_fluid_pipe').loops(1)
event.recipes.createSequencedAssembly([ // start the recipe
		Item.of('kubejs:radiant_mechanism').withChance(130.0), // this is the item that will appear in JEI as the result
		Item.of('create:refined_radiance').withChance(8.0), // the rest of these items will part of the scrap
		Item.of('kubejs:compressed_mechanism').withChance(8.0),
	],'kubejs:compressed_mechanism',[ // 'create:golden_sheet' is the input
		// the transitional item set by "transitionalItem('create:incomplete_large_cogwheel')" is the item used during the intermediate stages of the assembly
		event.recipes.createCutting('kubejs:incomplete_radiant_mechanism', 'kubejs:incomplete_radiant_mechanism'),
		event.recipes.createDeploying('kubejs:incomplete_radiant_mechanism',['kubejs:incomplete_radiant_mechanism', 'create:refined_radiance']),
		event.custom({type: "create_new_age:energising", energy_needed: 10000, ingredients: [{item: "kubejs:incomplete_radiant_mechanism"}],results: [{item: "kubejs:incomplete_radiant_mechanism"}]}),
		event.recipes.createPressing('kubejs:incomplete_radiant_mechanism', 'kubejs:incomplete_radiant_mechanism')
		
	]).transitionalItem('kubejs:incomplete_radiant_mechanism').loops(1)


})