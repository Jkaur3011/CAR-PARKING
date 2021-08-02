canvas= document.getElementById("carcanvas");
ctx = canvas.getContext("2d");

new_pic = ["car1.PNG", "car2.PNG", "car3.PNG", "car4.PNG", "car5.PNG", "car6.PNG", "car7.PNG", "car8.gif", "car9.gif"];
random_bg = Math.floor(Math.random()*9);
console.log(random_bg);

car_width = 90;
car_height = 150;

car_x = 10;
car_y = 10;

canvas_pics = new_pic[random_bg];
car_img = "2.png";

function add(){
    canvasbg = new Image();
    canvasbg.src = canvas_pics;
    canvasbg.onload = upload_bg();

    carj = new Image();
    carj.src = car_img;
    carj.onload = upload_car();
}

function upload_bg(){
    ctx.drawImage(canvasbg, 0, 0, canvas.width, canvas.height);
}

function upload_car(){
    ctx.drawImage(carj, car_x, car_y, car_width, car_height);
}

window.addEventListener("keydown", down_k);

function down_k(b){
    KEYHOLD = b.keyCode;
    console.log(KEYHOLD);
    if(KEYHOLD == 37){
        left();
    }

    if(KEYHOLD == 38){
        up();
    }

    if(KEYHOLD == 39){
        right();
    }

    if(KEYHOLD == 40){
        down();
    }
}

function left(){
    if(car_x >= 0){
        car_x = car_x - 50;
        upload_bg();
        upload_car();
    }
}

function right(){
    if(car_x <= 700){
        car_x = car_x + 50;
        upload_bg();
        upload_car();
    }
}

function up(){
    if(car_y >= 0){
        car_y = car_y - 50;
        upload_bg();
        upload_car();
    }
}

function down(){
    if(car_y <= 500){
        car_y = car_y + 50;
        upload_bg();
        upload_car();
    }
}