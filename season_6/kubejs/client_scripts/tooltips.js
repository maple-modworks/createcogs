ItemEvents.tooltip((event) => {
	event.add("mbd2:steam_turbine", Text.translate("tooltip.kubejs.multiblock").withStyle("blue"));

	event.add("cogutilities:waste_barrel", Text.translate("tooltip.kubejs.nuclear.waste_barrel").withStyle("blue"));
	event.add("cogutilities:empty_waste_barrel", Text.translate("tooltip.kubejs.building").withStyle("grey"));
	event.add("cogutilities:decayed_waste_barrel", Text.translate("tooltip.kubejs.nuclear.residue_barrel").withStyle("blue"));
	//this is in a loop because i suspect there will be more items soon...
	[
		"create:tree_fertilizer"
	].forEach((id) => event.add(id, Text.translate("tooltip.kubejs.removed").withStyle("red")));
});
