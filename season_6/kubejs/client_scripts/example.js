// priority: 0

console.info("Loaded client scripts");

JEIEvents.addItems((e) => {
	e.add(Ingredient.of("@create").getItemIds().toArray());
});
