StartupEvents.registry('item', event => {
  event.create('compressed_mechanism'),
  event.create('graphite_dust'),
  event.create('sawdust'),
  event.create('graphite_ingot'),
  event.create('graphite_processing_unit'),
  event.create('incomplete_compressed_mechanism','create:sequenced_assembly'),
  event.create('incomplete_electron_tube', 'create:sequenced_assembly')
  event.create('graphite_electrode')
  event.create('incomplete_graphite_electrode', 'create:sequenced_assembly')
  event.create('light_bulb')
  event.create('incomplete_light_bulb', 'create:sequenced_assembly')
  event.create('incomplete_compressed_iron', 'create:sequenced_assembly')
  event.create('incomplete_fluid_pipe', 'create:sequenced_assembly')
})

