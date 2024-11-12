let $ForgeCapabilities = Java.loadClass("net.minecraftforge.common.capabilities.ForgeCapabilities");

PlayerEvents.tick((event) => {
/*	const radius = 10
	const player = event.player
	const block = player.block
	let fluidNearby = false
	let check = 0

  // Helper function to check if the player is wearing a full set of leather armor
  const isWearingFullLeatherArmor = () => {
    const helmet = player.inventory.getArmor(3); // Helmet slot
    const chestplate = player.inventory.getArmor(2); // Chestplate slot
    const leggings = player.inventory.getArmor(1); // Leggings slot
    const boots = player.inventory.getArmor(0); // Boots slot

    const isLeatherHelmet = helmet && (helmet.id === 'minecraft:leather_helmet' || helmet.id === 'create:goggles');
    const isLeatherChestplate = chestplate && chestplate.id === 'minecraft:leather_chestplate';
    const isLeatherLeggings = leggings && leggings.id === 'minecraft:leather_leggings';
    const isLeatherBoots = boots && boots.id === 'minecraft:leather_boots';

    // Return true if the player is wearing a full set of leather armor
    return isLeatherHelmet && isLeatherChestplate && isLeatherLeggings && isLeatherBoots;
  };





   for (let Cx = -radius; Cx < radius; Cx++) {
    for (let Cy = -radius; Cy < radius; Cy++) {
      for (let Cz = -radius; Cz < radius; Cz++) {
		  let playerPos = event.player.block.pos
        let checkPosx = playerPos.x + Cx;
        let checkPosy = playerPos.y + Cy;
        let checkPosz = playerPos.z + Cz;
        let cBlock = player.level.getBlock(checkPosx, checkPosy, checkPosz);
			//check if checked block is a fluid tank
			if (cBlock.id == 'create:fluid_tank' || cBlock.id == 'create:item_drain' || cBlock.id == 'create:spout') {
				//load capabilities of fluid tanks entity
				let tank = cBlock.entity.getCapability($ForgeCapabilities.FLUID_HANDLER).resolve().get();
				//get the ID of the fluid inside the fluid tank, architectury has to be used
				let fluidId = tank.getFluidInTank(0).fluid.arch$registryName()
				
				//if specified fluid found, set fluidNearby to true to be used for logic later
				if (fluidId == 'kubejs:nuclear_fuel' || fluidId == 'kubejs:nuclear_waste') {
					fluidNearby = true
				}
			}
		}
	}
  } 
  //debug line, uncomment to enable
  //player.tell([isWearingFullLeatherArmor(),player.isCreative(),player.isSpectator(), fluidNearby])
  
	//if a specified fluid is found, apply potion effects to player (or other logic)
	if (fluidNearby == true && !isWearingFullLeatherArmor() && !player.isCreative() && !player.isSpectator()) {
		player.potionEffects.add('minecraft:poison', 300, 1);
		player.potionEffects.add('minecraft:nausea', 300, 1);
	}*/
})