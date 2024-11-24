WorldgenEvents.remove((event) => {
	[
		"raw_generation",
		"lakes",
		"local_modifications",
		"underground_structures",
		"surface_structures",
		"strongholds",
		"underground_ores",
		"underground_decoration",
		"fluid_springs",
		"vegetal_decoration",
		"top_layer_modification",
	].forEach((step) => event.removeFeatureById(step, ["pneumaticcraft:oil_lake"]));
});
