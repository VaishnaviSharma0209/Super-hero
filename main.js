var canvas=new fabric.Canvas("myCanvas");
player_x=30;
player_y=30;
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
    fabric.Image.fromURL(get_image, function(Img){
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
window.addEventListener("keydown", my_keydown);
function my_keydown(e){
    keypressed=e.keyCode;
    console.log(keypressed);
    if (keypressed=='37'){
        left();
        console.log("left");
    }
    if (keypressed=='38'){
        up();
        console.log("up");
    }
    if (keypressed=='39'){
        right();
        console.log("right");
    }
    if (keypressed=='40'){
        down();
        console.log("down");
    }
    if(e.shiftKey== true && keypressed=='80'){
        block_image_height=block_image_height+10;
        block_image_width=block_image_width+10;
        document.getElementById("width").innerHTML=block_image_width;
        document.getElementById("Height").innerHTML=block_image_height;
        console.log("Shift+p");
    }
    if(e.shiftKey== true && keypressed=='77'){
        block_image_height=block_image_height-10;
        block_image_width=block_image_width-10;
        document.getElementById("width").innerHTML=block_image_width;
        document.getElementById("Height").innerHTML=block_image_height;
        console.log("Shift+m");
    }
    if(keypressed=='76'){
        block_update("captain_america_left_hand.png");
        console.log("L pressed");
    }
    if(keypressed=='82'){
        block_update("ironman_right_hand.png");
        console.log("R pressed");
    }
    if(keypressed=='70'){
        block_update("ironman_face.png");
        console.log("F pressed");
    }
    if(keypressed=='66'){
        block_update("spiderman_body.png");
        console.log("B pressed");
    }
    if(keypressed=='72'){
        block_update("hulk_legs.png");
        console.log("H pressed");
    }
    if(keypressed=='84'){
        block_update("thor_right_hand.png");
        console.log("T pressed");
    }
    if(keypressed=='83'){
        block_update("spiderman_legs.png");
        console.log("S pressed");
    }
    if(keypressed=='75'){
        block_update("hulkd_body.png");
        console.log("K pressed");
    }
    if(keypressed=='87'){
        block_update("thor_right_hand.png");
        console.log("W pressed");
    }
}
function up(){
    if (player_y>=30){
    player_y=player_y-block_image_height;
    console.log("Player x=" + player_x + "Y =" + player_y);
    canvas.remove(player_image);
    player_update();
    }
}
function left(){
    if (player_x>=30){
        player_x=player_x-block_image_width;
        console.log("Player x=" + player_x + "Y =" + player_y);
        canvas.remove(player_image);
        player_update();
    }
}
function right(){
    if (player_x<=850){
        player_x=player_x+block_image_width;
        console.log("Player x=" + player_x + "Y =" + player_y);
        canvas.remove(player_image);
        player_update();
    }
}
function down(){
    if (player_y<=500){
    player_y=player_y+block_image_height;
    console.log("Player x=" + player_x + "Y =" + player_y);
    canvas.remove(player_image);
    player_update();
    }
}