var canvas=new fabric.Canvas("myCanvas");
player_x=10;
player_y=10;
var player_image="";
var block_image="";
block_image_width=30;
block_image_height=30;
function player_update(){
    fabric.Image.fromURL("player.png", function(Img){
        player_image=Img;
        player_image.scaleToWidth(150);
        player_image.scaleToHeight(140);
        player_image.set({
            top:player_y,
            left:player_x
        });
        canvas.add(player_image);
    });
}
function block_update(get_image){
    fabric.Image.fromUrl(get_image, function(Img){
        block_image=Img;
        block_image.scaleToWidth(block_image_width);
        block_image.scaleToHeight(block_image_height);
        block_image.set({
            top:player_y,
            left:player_x
        });
        canvas.add(block_image);
    });
}