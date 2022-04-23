const showFormBtn = () => {
  const newTodoBtn = document.createElement('button');
  newTodoBtn.setAttribute('id', 'show-form');
  newTodoBtn.textContent = '+';
  return newTodoBtn;
};

export default showFormBtn;
