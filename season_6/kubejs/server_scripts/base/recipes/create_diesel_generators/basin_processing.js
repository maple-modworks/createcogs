ServerEvents.recipes((event) => {
	event.custom({
		type: "createdieselgenerators:basin_fermenting",
		ingredients: [
			{
				fluid: "createdieselgenerators:crude_oil",
				amount: 500,
			},
		],
		heatRequirement: "heated",
		processingTime: 200,
		results: [
			{
				item: "kubejs:graphite_dust",
			},
			{
				item: "kubejs:graphite_dust",
				chance: 0.1,
			},
		],
	});
});
