function gravity() {
    const img = document.getElementById('sprite');
    if(img.offsetTop <=600){
    img.style.top = `${img.offsetTop + 5}px`;
  }}
  function jump() {
    const img = document.getElementById('sprite');
    
    img.style.top = `${img.offsetTop - 100}px`;
  }
  function moveLeft() {
    const img = document.getElementById('obj');
    const img2 = document.getElementById('obj2');
    img.style.left = `${img.offsetLeft - 1}px`;
    img2.style.left = `${img.offsetLeft - 1}px`;
  }

  setInterval(gravity,20);
  setInterval(moveLeft,20);
  document.getElementById("button").onclick=function(){
    jump();
  }

  