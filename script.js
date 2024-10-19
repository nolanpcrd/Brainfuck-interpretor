window.onload=initListeners;

function initListeners(){
  document.getElementById('bf').onchange = translateBf;
}

function translateBf(){
  let code = document.getElementById('bf').value;
  let memory = [];
  let result = "";
  let currentIndex = 0;

  for (let i=0;i<code.length;i++){
    let instruction = code.charAt(i);
    switch (instruction){
      case '>':
        currentIndex++;
        break;
      case '<':
        currentIndex--
        break;
      case '+':
        if (typeof memory[currentIndex] !== undefined){
          memory[currentIndex]++;
        }
      case '-':
        if (typeof memory[currentIndex] !== undefined){
          memory[currentIndex]--;
        }
        else {
          memory[currentIndex] = 1;
        }
        break;
      case '.':
        if (typeof memory[currentIndex] !== undefined && memory[currentIndex] >= 1){
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
