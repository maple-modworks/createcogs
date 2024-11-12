BlockEvents.rightClicked("kubejs:nuclear_barrel", event => {
	const {hand, block} = event
		event.level.getPlayers().forEach(player => {
			player.tell(block.properties.age())
		})
})