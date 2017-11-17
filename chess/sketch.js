function setup() {
  createCanvas(500,400);
}

function draw() {
  background(100);
  fill(250);

  var x = 0
  var y = 0
  
  for (var i = 0; i < 8; i++ ) {
    
    if ( i % 2 === 0){
     fill('black')
    } else {
     fill('white')
    }
    
   //while (count < )
    rect(x,y, 50, 50);
    x += 50
  } 
  
  x = 0
  y+=50
  
  for (var i = 0; i < 8; i++ ) {
    
    if ( i % 2 === 0){
     fill('white')
    } else {
     fill('black')
    }
    
   //while (count < )
    rect(x,y, 50, 50);
    x += 50
  } 
  x = 0
  y += 50
  
  for (var i = 0; i < 8; i++ ) {
    
    if ( i % 2 === 0){
     fill('black')
    } else {
     fill('white')
    }
    rect(x,y, 50, 50);
    
    x += 50
  } 
   x = 0
  y += 50
  
  for (var i = 0; i < 8; i++ ) {
    
    if ( i % 2 === 0){
     fill('white')
    } else {
     fill('black')
    }
    rect(x,y, 50, 50);
    
    x += 50
  } 
   x = 0
  y += 50
  
  for (var i = 0; i < 8; i++ ) {
    
    if ( i % 2 === 0){
     fill('black')
    } else {
     fill('white')
    }
    rect(x,y, 50, 50);
    
    x += 50
  } 
   x = 0
  y += 50
  
  for (var i = 0; i < 8; i++ ) {
    
    if ( i % 2 === 0){
     fill('white')
    } else {
     fill('black')
    }
    rect(x,y, 50, 50);
    
    x += 50
  } 
   x = 0
  y += 50
  
  for (var i = 0; i < 8; i++ ) {
    
    if ( i % 2 === 0){
     fill('black')
    } else {
     fill('white')
    }
    rect(x,y, 50, 50);
    
    x += 50
  } 
  
}


