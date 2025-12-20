ServerEvents.tags("block", (event) => {
	event.add("minecraft:beacon_base_blocks", "kubejs:refined_radiance_block");
});
ServerEvents.tags("item", event => {
	event.add("createcogs:ropes", ["farmersdelight:rope", "supplementaries:rope"]);
})
