ServerEvents.recipes((event) => {
	event.recipes
        .createHaunting(
            Item.of('minecraft:coal').withChance(0.02),
            'minecraft:charcoal'
        );
    event.recipes
        .createHaunting(
            Item.of("minecraft:crying_obsidian").withChance(0.2),
            'minecraft:obsidian'
        );
});
