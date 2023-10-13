// function to generate random color
function randomColor() {
    let color = [];
    for (let i = 0; i < 3; i++) {
      color.push(Math.floor(Math.random() * 256));
    }
    return 'rgb(' + color.join(', ') + ')';
  } 
  

//   Triangle  random colour generate
document.getElementById('first').addEventListener('mouseenter',function(){
    const colorbg = document.getElementById('first');
    colorbg.style.backgroundColor = randomColor(); 
})
//   Rectangle  random colour generate

document.getElementById('second').addEventListener('mouseenter',function(){
    const colorbg = document.getElementById('second');
    colorbg.style.backgroundColor = randomColor(); 
})

document.getElementById('third').addEventListener('mouseenter',function(){
    const colorbg = document.getElementById('third');
    colorbg.style.backgroundColor = randomColor(); 
})

document.getElementById('fourth').addEventListener('mouseenter',function(){
    const colorbg = document.getElementById('fourth');
    colorbg.style.backgroundColor = randomColor(); 
})

document.getElementById('fifth').addEventListener('mouseenter',function(){
    const colorbg = document.getElementById('fifth');
    colorbg.style.backgroundColor = randomColor(); 
})

document.getElementById('sixth').addEventListener('mouseenter',function(){
    const colorbg = document.getElementById('sixth');
    colorbg.style.backgroundColor = randomColor(); 
})
