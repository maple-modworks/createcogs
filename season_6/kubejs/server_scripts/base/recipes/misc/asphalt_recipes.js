ServerEvents.recipes((event) => {
// This script should be placed in the kubejs/scripts folder

// Define the tag for asphalt blocks
var asphaltTag = '#create_dd:asphalt_blocks';

// Define the color dyes
var dyes = [
    'minecraft:red_dye',
    'minecraft:blue_dye',
    'minecraft:green_dye',
    'minecraft:yellow_dye',
    'minecraft:white_dye',
    'minecraft:black_dye',
    'minecraft:orange_dye',
    'minecraft:purple_dye',
    'minecraft:lime_dye',
    'minecraft:gray_dye',
    'minecraft:light_gray_dye',
    'minecraft:cyan_dye',
    'minecraft:light_blue_dye',
    'minecraft:magenta_dye',
    'minecraft:pink_dye',
    'minecraft:brown_dye'
];

function createShapelessRecipe(color, dye) {
    var blockId = 'create_dd:' + color + '_asphalt_block';
    var tagId = 'create_dd:asphalt_blocks'; // Use a simplified tag ID

    event.custom({
        type: 'minecraft:crafting_shapeless',
        ingredients: [
            { item: dye },
            { tag: tagId, count: 8 } // Use the tag ID directly
        ],
        result: {
            item: blockId,
            count: 8
        }
    });
}


// Register recipes for each color
dyes.forEach(function(dye) {
    var color = dye.split(':')[1].replace('_dye', ''); // Extract color from dye ID
    createShapelessRecipe(color, dye);
});
})