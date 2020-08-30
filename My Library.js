
function bounceOff(){
    if (idk.x - anything.x < anything.width/2 + idk.width/2
      && anything.x - idk.x < anything.width/2 + idk.width/2) {
      idk.shapeColor = "orange";
      idk.velocityX = idk.velocityX * -1;
      anything.shapeColor = "chocolate";
      anything.velocityX = anything.velocityX * -1;
    }
  }
  
  function collide(a, b){
    if (a.x - b.x < b.width/2 + a.width/2
      && b.x - a.x < b.width/2 + a.width/2
      && a.y - b.y < b.height/2 + a.height/2
      && b.y - a.y < b.height/2 + a.height/2) {
    return  true
  }
  
  else {
    return  false
  }
  }