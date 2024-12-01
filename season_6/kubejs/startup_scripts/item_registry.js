StartupEvents.registry("item", (event) => {
	[
		"compressed_mechanism",
		"graphite_dust",
		"sawdust",
		"graphite_ingot",
		"graphite_electrode",
		"light_bulb",
		"silicon_template",
		"silicon_compound",
		"incomplete_transistor",
		"incomplete_capacitor",
		"light_bulb_base",
	].forEach((output) => event.create(output));
	[
		// incomplete items
		"incomplete_compressed_mechanism",
		"incomplete_electron_tube",
		"incomplete_graphite_electrode",
		"incomplete_light_bulb",
		"incomplete_fluid_pipe",
		"almost_assembled_pcb",
	].forEach((output) => event.create(output, "create:sequenced_assembly"));

	event.create("radiant_mechanism").glow(true).displayName("Radiant Core");
	event.create("mod_token").glow(true);
	event.create("incomplete_graphite_ingot", "create:sequenced_assembly").displayName("Almost Solid Graphite Dust");
	event.create("incomplete_radiant_mechanism", "create:sequenced_assembly").displayName("Incomplete Radiant Core");
	//add incomplete versions of pneumatic armor with textures
	['leggings', 'chestplate', 'helmet', 'boots'].forEach(piece => event.create(`incomplete_pneumatic_${piece}`, 'create:sequenced_assembly').texture(`pneumaticcraft:item/pneumatic_${piece}`));
});
