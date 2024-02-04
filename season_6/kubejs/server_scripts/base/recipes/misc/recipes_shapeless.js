ServerEvents.recipes((event) => {
  event.shapeless('minecraft:oak_planks', ['4x kubejs:sawdust'])

  event.shaped('minecraft:hopper', [
    'S S',
    'SBS',
    ' A'
  ], {
    S: 'minecraft:iron_ingot',
    A: 'create:large_cogwheel',
    B: 'minecraft:chest'
  })
})
