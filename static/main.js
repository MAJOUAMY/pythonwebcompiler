function setCursorPosition(e) {
    var textarea = e.target;
    var range = window.getSelection().getRangeAt(0);
    var lineStart = textarea.value.lastIndexOf('\n', range.startOffset - 1) + 1;
    textarea.setSelectionRange(lineStart, lineStart);
  }