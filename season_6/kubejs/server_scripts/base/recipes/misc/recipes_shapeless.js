ServerEvents.recipes((event) => {
  event.shapeless('minecraft:oak_planks',[
  '4x kubejs:sawdust']),
  event.shapeless('kubejs:refined_radiance_block',[
  '9x create:refined_radiance']),
  event.shapeless('9x create:refined_radiance',[
  'kubejs:refined_radiance_block']),
  event.shapeless('cogutilities:empty_waste_barrel', [
	'minecraft:barrel',
	'minecraft:yellow_dye',
	'create:iron_sheet']),
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
