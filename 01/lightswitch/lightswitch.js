var lightStatus = "off";

var pressSwitch = function(switchColour){
  if(lightStatus == switchColour){
    lightStatus = "off";
  }
  else{
    lightStatus = switchColour;
  }
}

console.log("light is ", lightStatus);

console.log("red switch pressed");
pressSwitch("red");
console.log("light is ", lightStatus);

console.log("red switch pressed");
pressSwitch("red");
console.log("light is ", lightStatus);

console.log("red switch pressed");
pressSwitch("red");
console.log("light is ", lightStatus);

console.log("yellow switch pressed");
pressSwitch("yellow");
console.log("light is ", lightStatus);

console.log("red switch pressed");
pressSwitch("red");
console.log("light is ", lightStatus);

console.log("yellow switch pressed");
pressSwitch("yellow");
console.log("light is ", lightStatus);

console.log("yellow switch pressed");
pressSwitch("yellow");
console.log("light is ", lightStatus);