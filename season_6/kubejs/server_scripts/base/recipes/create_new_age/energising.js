ServerEvents.recipes((event) => {
	event.custom({
	type: "create_new_age:energising",
	energy_needed: 15000,
	ingredients: [
		{
		item: "create:chromatic_compound"
		}
	],
	results: [
		{
		item: "create:refined_radiance"
		}
	]
	}),
		event.custom({
	type: "create_new_age:energising",
	energy_needed: 1000,
	ingredients: [
		{
		item: "create:cinder_flour"
		}
	],
	results: [
		{
		item: "minecraft:glowstone_dust"
		}
	]
	})

})