var player_car = new Car();
    player_car.render();
var road = document.getElementById('road');
var runningTree = document.getElementById('runningTree');
var right = document.getElementById('right');

function action() {
  if(event.code == "ArrowLeft"){
    player_car.steerLeft();
  }
  if(event.code == "ArrowRight"){
    player_car.steeringRight();
  }
  if(event.code == "ArrowUp"){
    // var acceleration = setInterval(animate, 200 + 1);
    animate();
    this.speed = this.speed + 10;
  }
  if(event.code == "ArrowDown"){
    // clearInterval(acceleration)
  }
}

function animate() {
  //extracting a number
  var y = parseInt(road.style.backgroundPositionY);
  y += player_car.speed;
  road.style.backgroundPositionY=`${y}px`;
  console.log(road.style.backgroundPositionY);

  var y2 = parseInt(runningTree.style.backgroundPositionY);
  y2 += player_car.speed;
  runningTree.style.backgroundPositionY=`${y2}px`;

  var y3 = parseInt(right.style.backgroundPositionY);
  y3 += player_car.speed;
  right.style.backgroundPositionY=`${y3}px`;
}
// setInterval(animate,30);
// animate();
