// Adding Names
let pArr = [];

document.querySelector('#add').addEventListener('click', ()=>{

  let pName = document.querySelector('#people').value;

  if(pName === ''){

  }
  else{
    document.querySelector('#notify').innerText = `${pName} Added`;
    pArr.push(pName);
    pName = document.querySelector('#people').value = '';
  }
})

// Finding Who
document.querySelector('#find').addEventListener('click', ()=>{
  const randNo = Math.floor(Math.random()*pArr.length);
  console.log(randNo);
  let card = document.querySelector(".container");
  card.style.background = 'none';
  card.style.borderStyle = 'dotted';
  card.style.color = 'black';
  console.log(typeof pArr, pArr);
  if(pArr.length === 0){
    document.querySelector('#whodoes').innerText = `Enter a Name`;
  }
  else{
    document.querySelector('#whodoes').innerText = `${pArr[randNo]}`;
  }
  

  pArr = [];
})
