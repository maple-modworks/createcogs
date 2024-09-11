ServerEvents.recipes((event) => {
  event.recipes.create.emptying([Fluid.of('kubejs:soul_tears', 500), 'minecraft:obsidian'], 'minecraft:crying_obsidian'),
  event.recipes.createFilling('pneumaticcraft:transistor', [Fluid.of('pneumaticcraft:plastic', 1000), 'kubejs:incomplete_transistor']),
  event.recipes.createFilling('pneumaticcraft:capacitor', [Fluid.of('pneumaticcraft:plastic', 1000), 'kubejs:incomplete_capacitor']),
  event.recipes.createFilling('numismatics:vendor', [Fluid.of('kubejs:molten_steel', 500), 'createdieselgenerators:asphalt_block'])
})