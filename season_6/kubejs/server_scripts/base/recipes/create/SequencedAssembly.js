ServerEvents.recipes((event) => {
	event.recipes
		.createSequencedAssembly([Item.of("minecraft:hopper").withChance(130.0)], "minecraft:chest", [
			event.recipes.createDeploying("minecraft:chest", ["minecraft:chest", "minecraft:iron_ingot"]),
			event.recipes.createCutting("minecraft:chest", "minecraft:chest"),
		])
		.transitionalItem("minecraft:chest")
		.loops(3);

let iec = "kubejs:incomplete_electron_tube"
event.recipes
		.createSequencedAssembly(
			[
				"create:electron_tube" //should have a 100% success rate as this is the optimal recipe
			],
			"kubejs:light_bulb_base",
			[
				event.recipes.createFilling(iec, [
					iec, 
					Fluid.of("kubejs:crimson_essence", 50)
				]),
				event.recipes.createDeploying(iec, [
					iec,
					"kubejs:graphite_dust",
				])
			],
		)
		.transitionalItem(iec)
		.loops(5);

	event.recipes
		.createSequencedAssembly(
			[
				Item.of("kubejs:graphite_electrode").withChance(130.0),
				Item.of("kubejs:graphite_dust").withChance(8.0),
				Item.of("create:iron_sheet").withChance(8.0),
				Item.of("kubejs:graphite_ingot").withChance(5.0),
			],
			"kubejs:graphite_ingot",
			[
				event.recipes.createCutting(
					"kubejs:incomplete_graphite_electrode",
					"kubejs:incomplete_graphite_electrode",
				),
				event.recipes.createDeploying("kubejs:incomplete_graphite_electrode", [
					"kubejs:incomplete_graphite_electrode",
					"create:iron_sheet",
				]),
				event.recipes.createDeploying("kubejs:incomplete_graphite_electrode", [
					"kubejs:incomplete_graphite_electrode",
					"minecraft:iron_nugget",
				]),
			],
		)
		.transitionalItem("kubejs:incomplete_electron_tube")
		.loops(1);

	event.recipes
		.createSequencedAssembly(
			[
				Item.of("kubejs:light_bulb_base").withChance(130.0),
				Item.of("minecraft:glass").withChance(8.0),
				Item.of("kubejs:graphite_electrode").withChance(5.0),
			],
			"kubejs:graphite_electrode",
			[
				event.recipes.createDeploying("kubejs:incomplete_light_bulb", [
					"kubejs:incomplete_light_bulb",
					"#forge:glass",
				]),
				event.recipes.createPressing("kubejs:incomplete_light_bulb", "kubejs:incomplete_light_bulb"),
			],
		)
		.transitionalItem("kubejs:incomplete_light_bulb")
		.loops(1);

	event.recipes
		.createSequencedAssembly([Item.of("16x create:fluid_pipe").withChance(130.0)], "minecraft:copper_block", [
			event.recipes.createCutting("kubejs:incomplete_fluid_pipe", "kubejs:incomplete_fluid_pipe"),
			event.recipes.createPressing("kubejs:incomplete_fluid_pipe", "kubejs:incomplete_fluid_pipe"),
			event.recipes.createPressing("kubejs:incomplete_fluid_pipe", "kubejs:incomplete_fluid_pipe"),
		])
		.transitionalItem("kubejs:incomplete_fluid_pipe")
		.loops(1);

	event.recipes
		.createSequencedAssembly(
			[
				Item.of("kubejs:radiant_mechanism").withChance(90),
				Item.of("kubejs:graphite_electrode").withChance(2),
				Item.of("kubejs:silicon_template").withChance(8),
			],
			"kubejs:silicon_template",
			[
				event.recipes.createDeploying("kubejs:incomplete_radiant_mechanism", [
					"kubejs:incomplete_radiant_mechanism",
					"kubejs:graphite_electrode",
				]),
				event.recipes.createPressing(
					"kubejs:incomplete_radiant_mechanism",
					"kubejs:incomplete_radiant_mechanism",
				),
				event.recipes.createDeploying("kubejs:incomplete_radiant_mechanism", [
					"kubejs:incomplete_radiant_mechanism",
					"create:refined_radiance",
				]),
				event.recipes.createDeploying("kubejs:incomplete_radiant_mechanism", [
					"kubejs:incomplete_radiant_mechanism",
					"ae2:fluix_crystal",
				]),
			],
		)
		.transitionalItem("kubejs:incomplete_radiant_mechanism")
		.loops(2);

	event.recipes
		.createSequencedAssembly(
			[
				Item.of("pneumaticcraft:printed_circuit_board").withChance(90),
				Item.of("kubejs:almost_assembled_pcb").withChance(2),
				Item.of("createaddition:electrum_sheet").withChance(8),
			],
			"pneumaticcraft:unassembled_pcb",
			[
				event.recipes.createDeploying("kubejs:almost_assembled_pcb", [
					"kubejs:almost_assembled_pcb",
					"pneumaticcraft:transistor",
				]),
				event.recipes.createDeploying("kubejs:almost_assembled_pcb", [
					"kubejs:almost_assembled_pcb",
					"pneumaticcraft:capacitor",
				]),
				event.recipes.createDeploying("kubejs:almost_assembled_pcb", [
					"kubejs:almost_assembled_pcb",
					"kubejs:light_bulb",
				]),
			],
		)
		.transitionalItem("kubejs:almost_assembled_pcb")
		.loops(2);

	event.recipes
		.createSequencedAssembly([Item.of("kubejs:compressed_mechanism").withChance(100)], "pneumaticcraft:plastic", [
			event.recipes.createDeploying("kubejs:incomplete_compressed_mechanism", [
				"kubejs:incomplete_compressed_mechanism",
				"kubejs:silicon_template",
			]),
			event.recipes.createDeploying("kubejs:incomplete_compressed_mechanism", [
				"kubejs:incomplete_compressed_mechanism",
				"pneumaticcraft:printed_circuit_board",
			]),
			event.recipes.createPressing(
				"kubejs:incomplete_compressed_mechanism",
				"kubejs:incomplete_compressed_mechanism",
			),
		])
		.transitionalItem("kubejs:incomplete_compressed_mechanism")
		.loops(8);

	event.recipes
		.createSequencedAssembly(
			[Item.of("kubejs:graphite_ingot").withChance(90), Item.of("kubejs:graphite_dust").withChance(10)],
			"kubejs:graphite_dust",
			[event.recipes.createPressing("kubejs:incomplete_graphite_ingot", "kubejs:incomplete_graphite_ingot")],
		)
		.transitionalItem("kubejs:incomplete_graphite_ingot")
		.loops(3);

	event.recipes
		.createSequencedAssembly(
			[
				Item.of("create_sa:heat_engine").withChance(90),
				Item.of("create:zinc_ingot").withChance(5),
				Item.of("minecraft:copper_ingot").withChance(5),
			],
			"kubejs:silicon_template",
			[
				event.recipes.createDeploying("create_sa:incomplete_heat_engine", [
					"create_sa:incomplete_heat_engine",
					"create:electron_tube",
				]),
				event.recipes.createDeploying("create_sa:incomplete_heat_engine", [
					"create_sa:incomplete_heat_engine",
					"minecraft:copper_ingot",
				]),
				event.recipes.createPressing("create_sa:incomplete_heat_engine", "create_sa:incomplete_heat_engine"),
				event.recipes.createDeploying("create_sa:incomplete_heat_engine", [
					"create_sa:incomplete_heat_engine",
					"create:zinc_ingot",
				]),
				event.recipes.createPressing("create_sa:incomplete_heat_engine", "create_sa:incomplete_heat_engine"),
			],
		)
		.transitionalItem("create_sa:incomplete_heat_engine")
		.loops(3);

	event.recipes
		.createSequencedAssembly(
			[
				Item.of("create_sa:hydraulic_engine").withChance(90),
				Item.of("create:fluid_pipe").withChance(5),
				Item.of("minecraft:copper_ingot").withChance(5),
			],
			"kubejs:silicon_template",
			[
				event.recipes.createDeploying("create_sa:incomplete_hydraulic_engine", [
					"create_sa:incomplete_hydraulic_engine",
					"create:electron_tube",
				]),
				event.recipes.createDeploying("create_sa:incomplete_hydraulic_engine", [
					"create_sa:incomplete_hydraulic_engine",
					"create:fluid_pipe",
				]),
				event.recipes.createFilling("create_sa:incomplete_hydraulic_engine", [
					"create_sa:incomplete_hydraulic_engine",
					Fluid.of("minecraft:water", 200),
				]),
				event.recipes.createDeploying("create_sa:incomplete_hydraulic_engine", [
					"create_sa:incomplete_hydraulic_engine",
					"minecraft:copper_ingot",
				]),
				event.recipes.createPressing(
					"create_sa:incomplete_hydraulic_engine",
					"create_sa:incomplete_hydraulic_engine",
				),
			],
		)
		.transitionalItem("create_sa:incomplete_hydraulic_engine")
		.loops(3);

	event.recipes
		.createSequencedAssembly(
			[
				Item.of("create_sa:steam_engine").withChance(90),
				Item.of("create:electron_tube").withChance(2),
				Item.of("create:brass_sheet").withChance(8),
			],
			"kubejs:silicon_template",
			[
				event.recipes.createDeploying("create_sa:incomplete_steam_engine", [
					"create_sa:incomplete_steam_engine",
					"create:brass_sheet",
				]),
				event.recipes.createDeploying("create_sa:incomplete_steam_engine", [
					"create_sa:incomplete_steam_engine",
					"create:electron_tube",
				]),
				event.recipes.createDeploying("create_sa:incomplete_steam_engine", [
					"create_sa:incomplete_steam_engine",
					"create:steam_engine",
				]),
				event.recipes.createPressing("create_sa:incomplete_steam_engine", "create_sa:incomplete_steam_engine"),
				event.recipes.createDeploying("create_sa:incomplete_steam_engine", [
					"create_sa:incomplete_steam_engine",
					"create:electron_tube",
				]),
			],
		)
		.transitionalItem("create_sa:incomplete_steam_engine")
		.loops(3);
		['boots', 'leggings', 'helmet', 'chestplate'].forEach(piece => {
			event.recipes.createSequencedAssembly([
				Item.of(`pneumaticcraft:pneumatic_${piece}`).withChance(100)
			], `pneumaticcraft:compressed_iron_${piece}`, [
				event.recipes.createDeploying(`kubejs:incomplete_pneumatic_${piece}`, [`kubejs:incomplete_pneumatic_${piece}`, 'kubejs:compressed_mechanism']),
				event.recipes.createDeploying(`kubejs:incomplete_pneumatic_${piece}`, [`kubejs:incomplete_pneumatic_${piece}`, 'pneumaticcraft:reinforced_air_canister']),
				event.recipes.createPressing(`kubejs:incomplete_pneumatic_${piece}`, `kubejs:incomplete_pneumatic_${piece}`),
				event.recipes.createDeploying(`kubejs:incomplete_pneumatic_${piece}`, [`kubejs:incomplete_pneumatic_${piece}`, 'pneumaticcraft:reinforced_air_canister']),
				event.recipes.createPressing(`kubejs:incomplete_pneumatic_${piece}`, `kubejs:incomplete_pneumatic_${piece}`),
			]).transitionalItem(`kubejs:incomplete_pneumatic_${piece}`).loops(1)
		})
});
