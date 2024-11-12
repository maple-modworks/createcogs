let $ForgeCapabilities = Java.loadClass("net.minecraftforge.common.capabilities.ForgeCapabilities");
const getIsFluid = (fluid, flowing) => block => block.id == fluid || block.id == flowing;
const isFluid = getIsFluid('kubejs:nuclear_fuel', 'kubejs:nuclear_waste');

PlayerEvents.tick(event => {
  const player = event.player;
  const standing = player.block;
  const radius = 10;

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

  // Apply effects when standing inside or directly on top of the fluid
  if ((standing.id == 'kubejs:nuclear_fuel' || standing.id == 'kubejs:nuclear_waste' || standing.up.id == 'kubejs:nuclear_fuel' || standing.up.id == 'kubejs:nuclear_waste')) {
    player.potionEffects.add('minecraft:poison', 300, 2);
    player.potionEffects.add('minecraft:nausea', 600, 2);
    player.potionEffects.add('minecraft:glowing', 1, 0);
  }

  // Get player position
  const playerPos = player.block.pos;

  // Debugging line
  //let t = player.level.getBlock(playerPos.x, playerPos.y - 1, playerPos.z).id === 'kubejs:nuclear_fuel' ? 'fuel found' : 'false';
  //player.tell(t);

  // Check surrounding blocks in a 10-block radius for the specified fluids
  let fluidNearby = false;
  let check = 0;

  // Adjusted loop conditions for a 10x10x10 area (or desired size)
  for (let Cx = -radius; Cx < radius; Cx++) {
    for (let Cy = -radius; Cy < radius; Cy++) {
      for (let Cz = -radius; Cz < radius; Cz++) {
        let checkPosx = playerPos.x + Cx;
        let checkPosy = playerPos.y + Cy;
        let checkPosz = playerPos.z + Cz;
        let Cblock = player.level.getBlock(checkPosx, checkPosy, checkPosz);
        check++;  // Increment the check counter

        // Check if the block is nuclear fuel or waste
        if (Cblock.id == 'kubejs:nuclear_fuel' || Cblock.id == 'kubejs:nuclear_waste'|| Cblock.id == 'kubejs:nuclear_barrel') {
          fluidNearby = true;
          break; // Exit if we find the fluid
        }
		
		//check if checked block is a fluid tank
		if (Cblock.id == 'create:fluid_tank' || Cblock.id == 'create:item_drain' || Cblock.id == 'create:spout') {
			//load capabilities of fluid tanks entity
			let tank = Cblock.entity.getCapability($ForgeCapabilities.FLUID_HANDLER).resolve().get();
			//get the ID of the fluid inside the fluid tank, architectury has to be used
			let fluidId = tank.getFluidInTank(0).fluid.arch$registryName()
			
			//if specified fluid found, set fluidNearby to true to be used for logic later
			if (fluidId == 'kubejs:nuclear_fuel' || fluidId == 'kubejs:nuclear_waste') {
				fluidNearby = true
			}
		}
      }
      if (fluidNearby) break;
    }
    if (fluidNearby) break;
  }

  // Apply different effects when the player is within 10 blocks of the fluid, if not wearing full leather armor
  if (fluidNearby && !isWearingFullLeatherArmor() && !player.isCreative() && !player.isSpectator()) {
    player.potionEffects.add('minecraft:poison', 300, 2);
    player.potionEffects.add('minecraft:nausea', 600, 2);
  }
});
