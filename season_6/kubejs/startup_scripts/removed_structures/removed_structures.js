WorldgenEvents.remove(event => {
	  // Attempt to remove the oil lake feature from various generation steps
    const steps = [
        'raw_generation',
        'lakes',
        'local_modifications',
        'underground_structures',
        'surface_structures',
        'strongholds',
        'underground_ores',
        'underground_decoration',
        'fluid_springs',
        'vegetal_decoration',
        'top_layer_modification'
    ]

    // Loop through each generation step and remove the oil lake feature
    steps.forEach(step => {
        event.removeFeatureById(step, ['pneumaticcraft:oil_lake'])
    })
})