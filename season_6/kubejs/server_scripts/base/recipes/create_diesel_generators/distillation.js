ServerEvents.recipes((event) => {
	event.custom({
		type: "createdieselgenerators:distillation",
		ingredients: [
			{
				fluid: "kubejs:steel_blend",
				amount: 500,
			},
		],
		heatRequirement: "superheated",
		processingTime: 300,
		results: [
			{
				fluid: "kubejs:molten_steel",
				amount: 400,
			},
			{
				fluid: "kubejs:molten_slag",
				amount: 100,
			},
		],
	});
	event.custom({
		type: "createdieselgenerators:distillation",
		ingredients: [
			{
				fluid: "kubejs:steel_blend",
				amount: 500,
			},
		],
		heatRequirement: "heated",
		processingTime: 600,
		results: [
			{
				fluid: "kubejs:molten_steel",
				amount: 250,
			},
			{
				fluid: "kubejs:molten_slag",
				amount: 250,
			},
		],
	});
	event.custom({
		type: "createdieselgenerators:distillation",
		ingredients: [
			{
				fluid: "createdieselgenerators:crude_oil",
				amount: 100,
			},
		],
		heatRequirement: "heated",
		processingTime: 200,
		results: [
			{
				fluid: "createdieselgenerators:diesel",
				amount: 20,
			},
			{
				fluid: "pneumaticcraft:kerosene",
				amount: 30,
			},
			{
				fluid: "createdieselgenerators:gasoline",
				amount: 30,
			},
			{
				fluid: "pneumaticcraft:lpg",
				amount: 20,
			},
		],
	});
	event.custom({
		type: "createdieselgenerators:distillation",
		ingredients: [
			{
				fluid: "createdieselgenerators:gasoline",
				amount: 100,
			},
		],
		heatRequirement: "superheated",
		processingTime: 300,
		results: [
			{
				fluid: "pneumaticcraft:lpg",
				amount: 75,
			},
		],
	});
});
