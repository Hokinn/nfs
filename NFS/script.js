// module -> Car component
class Car {
  constructor() {
    this.left = 0; //PIXELS FROM LEFT
    this.speed = 1; //PIXELS PER SECONDS
  }
  render(){
    //created div and remember the reference
    this.div = document.createElement('div');
    this.div.className = 'car main';
    this.updateStyle();
    var road = document.getElementById('road');
        road.appendChild(this.div);
  }
  steerLeft(){
    this.left -= 10;
    this.updateStyle();
  }
  steeringRight(){
    this.left += 10;
    this.updateStyle();
  }
  //UPDATES DIV STYLES
  updateStyle(){
    this.div.style.left = `${this.left}px`;
  }
}
