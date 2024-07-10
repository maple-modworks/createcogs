ServerEvents.recipes((event) => {
	event.custom({
  type: "ae2:transform",
  circumstance: {
    type: "explosion"
  },
  ingredients: [
    {
      item: "create:refined_radiance"
    },
	{
	  item: "kubejs:chaotic_mechanism"
	}
  ],
  result: {
    count: 1,
    item: "kubejs:radiant_mechanism"
  }
})
})