let serial = 0;
const newField = 'cm'+'2'.sup();
const btnText = 'Convert to '+'m'+'2'.sup();
const btnColor = ' bg-sky-500 text-white btn btn-md';
function displayData(name,area,newField,btnText){
    const container = document.getElementById("table-container");
    const tr = document.createElement("tr");
    tr.style.borderBottom = 'none';
    tr.innerHTML = `
    <td>${serial}.${name}</td>
    <td>${area} ${newField}</td>
    <td>
    <button class='bg-sky-500 border-white text-white btn btn-sm text-primary lowercase'>${btnText}</button>
    </td>
    
  `;
  container.appendChild(tr);
}

//Triangle Area Calculation
document.getElementById('btn-first').addEventListener('click', function(){
    serial+=1;
    const name = document.getElementById('triangle').innerText;
    const breadthField = document.getElementById('breadth-triangle').value;
    const heightField = document.getElementById('height-triangle').value;
    if((breadthField==='') || isNaN(breadthField) || (breadthField<0)){
      alert('Please Enter Positive Number');
      serial-=1;
      return;
    }
    else if(isNaN(heightField) || heightField<0 || heightField===''){
      alert("Please Enter Positive Number");
      serial-=1;
      return;
    }
    let area = 0.5*parseInt(breadthField)*parseInt(heightField);
    if(area % 1 !=0){
      area = parseFloat(area).toFixed(2);
    }
    displayData(name,area,newField,btnText);
})


// Rectangle Area Calculation
document.getElementById('btn-second').addEventListener('click',function(){
    serial +=1;
    const name = document.getElementById('rectangle').innerText;
      const widthField = document.getElementById('rectangle-width').value;
      const lengthField = document.getElementById('rectangle-length').value;
      if((widthField==='') || isNaN(widthField) || (widthField<0)){
        serial-=1;
        alert('Please Enter Positive Number');
        return;
      }
      else if(isNaN(lengthField) || length<0 || lengthField===''){
        serial-=1;
        alert("Please Enter Positive Number");
        return;
      }
      const area = parseInt(widthField)*parseInt(lengthField);
      displayData(name,area,newField,btnText);
})

// Parallelogram Area Calculation
document.getElementById('btn-third').addEventListener('click',function(){
    serial +=1;
    const name = document.getElementById('parallelogram').innerText;
    const breadthField = document.getElementById('parallelogram-breadth').innerText;
    const heightField = document.getElementById('parallelogram-height').innerText;
    const area = parseInt(breadthField)*parseInt(heightField);
    displayData(name,area,newField,btnText);
})
  // Rhombus Area Calculation
  document.getElementById('btn-fourth').addEventListener('click',function(){
    serial +=1;
    const name = document.getElementById('rhombus').innerText;
    const diagonal1Field = document.getElementById('rhombus-diagonal1').innerText;
    const diagonal2Field = document.getElementById('rhombus-diagonal2').innerText;
    let area = 0.5*parseInt(diagonal1Field)*parseInt(diagonal2Field);
      if(area % 1 !=0){
        area = parseFloat(area).toFixed(2);
      }
      displayData(name,area,newField,btnText);
})
  // Pentagon Area Calculation
  document.getElementById('btn-fifth').addEventListener('click',function(){
    serial +=1;
    const name = document.getElementById('pentagon').innerText;
    const perimeterField = document.getElementById('pentagon-perimeter').innerText;
    const apothemField = document.getElementById('pentagon-apothem').innerText;
    let area = 0.5*parseInt(perimeterField)*parseInt(apothemField);
      if(area % 1 !=0){
        area = parseFloat(area).toFixed(2);
      }
      displayData(name,area,newField,btnText);
})
  // Ellipse Area Calculation
  document.getElementById('btn-sixth').addEventListener('click',function(){
    serial +=1;
    const name = document.getElementById('ellipse').innerText;
    const a_axisField = document.getElementById('ellipse-a-axis').innerText;
    const b_axisField = document.getElementById('ellipse-b-axis').innerText;
    let area = Math.PI *parseInt(a_axisField)*parseInt(b_axisField);
      if(area % 1 !=0){
        area = parseFloat(area).toFixed(2);
      }
      displayData(name,area,newField,btnText);
})

