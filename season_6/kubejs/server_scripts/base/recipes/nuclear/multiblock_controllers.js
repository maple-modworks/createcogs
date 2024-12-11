ServerEvents.recipes((event) => {
	//steam turbine (and components)
	event.shaped(
		"mbd2:steam_turbine",
		// prettier-ignore
		[
			"APA",
			"TBT",
			"CIC"
		],
		{
			A: "create:andesite_alloy",
			P: "create:fluid_pipe",
			T: "create:fluid_tank",
			B: "create:brass_block",
			C: "create:brass_casing",
			I: "create:brass_ingot",
		}
	);
	event.recipes.createDeploying("mbd2:turbine_fan", ["create:propeller", "create:propeller"]);
	event.shapeless("mbd2:rotation_output", ["mbd2:turbine_fan"]);
	event.shapeless("mbd2:turbine_fan", ["mbd2:rotation_output"]);
	event.shaped(
		"mbd2:steam_vent",
		// prettier-ignore
		[
			" P ",
			" T ",
			" C "
		],
		{
			P: "create:fluid_pipe",
			T: "create:fluid_tank",
			C: "create:copper_casing",
		}
	);
	//nuclear boiler (and components)
	event.shaped(
		"mbd2:nuclear_boiler",
		// prettier-ignore
		[
			"TPT",
			"CBC",
			"PPP"
		],
		{
			T: "create:fluid_tank",
			P: "create:fluid_pipe",
			C: "create_new_age:reactor_casing",
			B: "mbd2:graphite_block",
		}
	);
	event.shapeless("mbd2:graphite_block", ["9x kubejs:graphite_ingot"]);
	event.shapeless("9x kubejs:graphite_ingot", ["mbd2:graphite_block"]);
	event.recipes.createCutting("mbd2:graphite_rods", "mbd2:graphite_block");
	//hydraulic press (and components)
	event.shaped(
		"mbd2:hydraulic_press",
		// prettier-ignore
		[
			"GPG",
			"FTF",
			"CCC"
		],
		{
			G: "create:metal_girder",
			P: "create:mechanical_press",
			F: "create:fluid_pipe",
			T: "create:fluid_tank",
			C: "create:copper_casing",
		}
	);
	event.shaped(
		"mbd2:item_input",
		// prettier-ignore
		[
			" C ",
			" D ",
			"   "
		],
		{
			C: "create:copper_casing",
			D: "create:depot",
		}
	);
});
