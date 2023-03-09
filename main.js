const content = document.querySelector('.content');

content.addEventListener('mouseup', highlightText);

function highlightText() {
  const selection = window.getSelection().toString();
  if (selection) {
    const range = window.getSelection().getRangeAt(0);
    const newNode = document.createElement('span');
    newNode.classList.add('highlight');
    range.surroundContents(newNode);
  }
}
