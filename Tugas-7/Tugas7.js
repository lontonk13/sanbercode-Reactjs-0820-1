//Soal 1

//Release 0
class Animal{
  constructor(name){
    this._name= name
    this._legs= 4
    this._cold_blooded= false
  }
get name(){
  return this._name
}
set name(name){
  return this._name = name
}
get legs(){
  return this._legs
}
set legs(legs){
  return this._legs = legs
}
get cold_blooded(){
  return this._cold_blooded
}
set cold_blooded(cold_blooded){
  return this._cold_blooded = cold_blooded
}
}

var sheep = new Animal("shaun");
console.log(sheep.name) // "shaun"
console.log(sheep.legs) // 4
console.log(sheep.cold_blooded) // false

// Release 1
class Ape extends Animal {
  constructor(name,){
    super(name)
    this._legs= 2

  }
 yell(){
    return "auwooo"
  }
}

class Frog extends Animal{
  constructor(name){
    super(name)
    this._cold_blooded= true
  }
  jump(){
    return "hop hop"
  }
}

var sungokong =new Ape("kingkong")
console.log(sungokong.yell())
console.log(sungokong);

var kodok=new Frog("buduk")
console.log(kodok.jump());
console.log(kodok);
console.log();



//Soal 2

class Clock {
  constructor({template}){
    this.template= template
    this.timer
  }
  render(){
    var date = new Date();

   var hours = date.getHours();
   if (hours < 10) hours = '0' + hours;

   var mins = date.getMinutes();
   if (mins < 10) mins = '0' + mins;

   var secs = date.getSeconds();
   if (secs < 10) secs = '0' + secs;

   let output = this.template
     .replace('h', hours)
     .replace('m', mins)
     .replace('s', secs);

   console.log(output);
  }
  start(){
    this.render
    this.timer = setInterval(this.render.bind(this), 1000)
  }
  stop(){
    clearInterval(this.timer)
  }
}
var clock = new Clock({template: 'h:m:s'});
clock.start(this);
