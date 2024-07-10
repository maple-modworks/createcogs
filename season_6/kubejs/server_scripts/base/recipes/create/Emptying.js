ServerEvents.recipes((event) => {
  event.recipes.create.emptying([Fluid.of('kubejs:soul_tears', 500), 'minecraft:obsidian'], 'minecraft:crying_obsidian')
})