window.onload=initListeners;

function initListeners(){
  document.getElementById('bf').onchange = translateBf;
}

function translateBf(){
  let code = document.getElementById('bf').value;
  let memory = [];
  let result = "";
  let currentIndex = 0;
  memory[0] = 0;

  for (let i=0;i<code.length;i++){
    let instruction = code.charAt(i);
    switch (instruction){
      case '>':
        currentIndex++;
        memory[currentIndex] = 0;
        break;
      case '<':
        if (currentIndex>0) currentIndex--;
        break;
      case '+':
        memory[currentIndex]++;
      case '-':
        if(memory[currentIndex] > 0) memory[currentIndex]--;
        break;
      case '.':
        if (memory[currentIndex] > 0){
          result += String.fromCharCode(memory[currentIndex]);
        }
        else {
          result = 'error : ' + memory[currentIndex];
          document.getElementById('result').value = result;
          return;
        }
        break;
      case '[':
        break;
      case ']':
        break;
    }
  }
  
  document.getElementById('result').value = result;
}
