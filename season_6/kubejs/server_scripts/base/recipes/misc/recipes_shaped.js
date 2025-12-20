ServerEvents.recipes((event) => {
	event.shaped(
		"ae2:cell_component_4k",
		// prettier-ignore
		[
			"RBR",
			"ACA",
			"RAR",
		],
		{
			A: "ae2:cell_component_1k",
			R: "minecraft:redstone",
			C: "create:refined_radiance",
			B: "ae2:calculation_processor",
		}
	);
	event.shaped(
		"ae2:cell_component_16k",
		// prettier-ignore
		[
			"RBR",
			"ACA", 
			"RAR",
		],
		{
			A: "ae2:cell_component_4k",
			R: "create:refined_radiance",
			C: "ae2:quartz_glass",
			B: "ae2:calculation_processor",
		}
	);
	event.shaped(
		"ae2:cell_component_64k",
		// prettier-ignore
		[
			"RBR",
			"ACA",
			"RAR",
		],
		{
			A: "ae2:cell_component_16k",
			R: "kubejs:refined_radiance_block",
			C: "kubejs:radiant_mechanism",
			B: "ae2:calculation_processor",
		}
	);
	event.shaped(
		"minecraft:hopper",
		// prettier-ignore
		[
			"S S",
			"SBS",
			" A",
		],
		{
			S: "minecraft:iron_ingot",
			A: "create:large_cogwheel",
			B: "minecraft:chest",
		}
	);
		event.shaped(
		"create_enchantment_industry:disenchanter",
		// prettier-ignore
		[
			"   ",
			"G G",
			"CDC",
		],
		{
			G: "minecraft:grindstone",
			C: "minecraft:copper_ingot",
			D: "create:item_drain",
		}
	);

	[ //i hate you BOP...
		"biomesoplenty:fir_planks",
		"biomesoplenty:redwood_planks",
		"biomesoplenty:mahogany_planks",
		"biomesoplenty:jacaranda_planks",
		"biomesoplenty:palm_planks",
		"biomesoplenty:willow_planks",
		"biomesoplenty:dead_planks",
		"biomesoplenty:magic_planks",
		"biomesoplenty:umbran_planks",
		"biomesoplenty:hellbark_planks",
	].forEach( (id) =>{
		event.shaped(
			"minecraft:chest",
			[
				"PPP",
				"P P",
				"PPP"
			],
			{
				P: id
			}
		);
	});
	
});
