let undo = document.getElementById('undo');
let redo = document.getElementById('redo');

undo.addEventListener('click', ()=>
{
  if(index < 0)
  {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.fillRect(0, 0, canvas.width, canvas.height);
    undo_array = [];
    redo_array = [];
    index = -1;
  }
  else
  {
    redo_index = totalLength - index;
    index--;
    redo_array[redo_index] = undo_array.pop();
    context.putImageData(undo_array[index], 0, 0);
    console.log("Index after undo pop", index);
  }
})

redo.addEventListener('click', () => 
{
  if(index != totalLength)
  {
    var count = totalLength - index;
    context.putImageData(redo_array[count - 1], 0, 0);
    index++;
    undo_array[index] = redo_array[count - 1];
  }
})
