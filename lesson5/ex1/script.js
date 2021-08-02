function getChessBoard() {
  let letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
  let clearDiv = document.createElement('div');
  clearDiv.className = 'letterBlock';
  app.append(clearDiv);
  for (let i = 0; i < letters.length; i++) {
    let div = document.createElement('div');
    div.innerHTML = `<b>${letters[i]}</b>`;
    div.className = 'letterBlock';
    app.appendChild(div);
  }
  for (let i = 1; i <= 8; i++) {
    let numDiv = document.createElement('div');
    numDiv.innerHTML = `<b>${i}</b>`;
    numDiv.className = 'numBlock';
    app.appendChild(numDiv);
    if (i % 2 != 0) {
      for (let j = 0; j < 8; j++) {
        let div = document.createElement('div');
        if (j % 2 != 0) {
          div.className = 'whiteSquare';
        } else {
          div.className = 'blackSquare';
        }
        app.appendChild(div);
      }
    } else {
      for (let j = 0; j < 8; j++) {
        let div = document.createElement('div');
        if (j % 2 != 0) {
          div.className = 'blackSquare';
        } else {
          div.className = 'whiteSquare';
        }
        app.appendChild(div);
      }
    }
  }
}

getChessBoard();
