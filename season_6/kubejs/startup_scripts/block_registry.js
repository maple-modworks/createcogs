const $IntegerProperty = Java.loadClass("net.minecraft.world.level.block.state.properties.IntegerProperty");

StartupEvents.registry("block", (event) => {
	event.create("andesite_trophy").defaultCutout().box(4, 0, 4, 12, 16, 12, true);
	event
		.create("refined_radiance_block")
		.item((item) => {
			item.glow(true);
		})
		.lightLevel(7);
	/* event.create('nuclear_barrel', 'cardinal')
    .defaultCutout()
    .lightLevel(7)
    .soundType('lantern')
    .property(BlockProperties.AGE_7)//$IntegerProperty.create('age', 0, 7))
    .item(item => {
        item.unstackable().fireResistant();
    })
.randomTick(tick => {
	let age = tick.block.age
      if (age == 7) {
        tick.block.set('kubejs:residue_barrel')
      } else {
        tick.block.set(tick.block.getId(), {
          age: `${age+1}`
        })
      }
    })

	event.create('residue_barrel', 'cardinal')
		.defaultCutout()
		.soundType('lantern')
 		.item(item => {
			item.unstackable().fireResistant()
		}) */
});
