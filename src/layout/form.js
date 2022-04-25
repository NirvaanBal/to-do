const formHTML = () => {
  const day = new Date().getDate();
  const month = new Date().getMonth();

  let html = `<form data-edit="false">
        <div class="form-control">
            <label for="title">Task</label>
            <input type="text" name="title" id="title" required />
        </div>
        <div class="form-control">
        <label for="description">Description</label>
        <textarea name="description" id="description" rows="5" required></textarea>
        </div>
        <div class="form-control">
            <label for="project">Project</label>
            <input type="text" name="project" id="project" placeholder="Optional" />
        </div>
        <div class="form-control">
            <p>Due Date</p>
            <div class="date">
            <label for="date">Date</label>
            <select name="date" id="date">`;

  for (let i = 1; i <= 31; i++) {
    if (i === day) html += `<option value="${i}" selected>${i}</option>`;
    else html += `<option value="${i}">${i}</option>`;
  }

  html += `</select>
            <label for="month">Month</label>
            <select name="month" id="month">`;

  [
    'jan',
    'feb',
    'mar',
    'apr',
    'may',
    'jun',
    'jul',
    'aug',
    'sep',
    'oct',
    'nov',
    'dec',
  ].forEach((m, index) => {
    if (index === month) {
      html += `<option value="${m}" selected>${m.toUpperCase()}</option>`;
    } else html += `<option value="${m}">${m.toUpperCase()}</option>`;
  });

  html += `</select>
            </div>
        </div>
        <div class="form-control">
            <p>Priority</p>
            <div class="selection">
                <div class="radio-control">
                    <label for="high">High</label>
                    <input type="radio" name="priority" id="high" value="high" />
                </div>
                <div class="radio-control">
                    <label for="low">Low</label>
                    <input type="radio" name="priority" id="low" value="low" checked />
                </div>
                </div>
            </div>
        </div>
        <div class="form-control">
            <button type="submit" id="to-do-btn">Create</button>
        </div>
    </form>`;

  return html;
};
const formContainer = document.createElement('div');
formContainer.setAttribute('id', 'todo-form');
const heading = document.createElement('h2');
heading.textContent = 'Create a new task';
formContainer.appendChild(heading);
formContainer.insertAdjacentHTML('beforeend', formHTML());

export default formContainer;
