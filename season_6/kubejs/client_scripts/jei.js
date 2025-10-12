JEIEvents.addItems((e) => {
	e.add(Ingredient.of("@create").getItemIds().toArray()); //force all create components to show up in jei
});
JEIEvents.addItems(event => {
  event.add('cogutilities:waste_barrel')
  event.add('cogutilities:decayed_waste_barrel')
  event.add('cogutilities:empty_waste_barrel')
})