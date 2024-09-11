// priority: 0

// Visit the wiki for more info - https://kubejs.com/

console.info('Loaded client scripts')

JEIEvents.addItems(e => {
    e.add(Ingredient.of('@create').getItemIds().toArray());
});
