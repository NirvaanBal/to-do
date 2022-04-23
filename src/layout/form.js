const formHTML = `
    <form>
        <div class="form-control">
            <label for="title">Title</label>
            <input type="text" name="title" id="title" required />
        </div>
        <div class="form-control">
            <label for="description">Description</label>
            <textarea name="description" id="description" rows="5" required></textarea>
        </div>
        <div class="form-control">
            <p>Due Date</p>
            <div class="date">
            <label for="date">Date</label>
            <select name="date" id="date">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
                <option value="16">16</option>
                <option value="17">17</option>
                <option value="18">18</option>
                <option value="19">19</option>
                <option value="20">20</option>
                <option value="21">21</option>
                <option value="22">22</option>
                <option value="23">23</option>
                <option value="24">24</option>
                <option value="25">25</option>
                <option value="26">26</option>
                <option value="27">27</option>
                <option value="28">28</option>
                <option value="29">29</option>
                <option value="30">30</option>
                <option value="31">31</option>
            </select>
            <label for="month">Month</label>
            <select name="month" id="month">
                <option value="jan">January</option>
                <option value="feb">February</option>
                <option value="mar">March</option>
                <option value="apr">April</option>
                <option value="may">May</option>
                <option value="jun">June</option>
                <option value="jul">July</option>
                <option value="aug">August</option>
                <option value="sep">September</option>
                <option value="oct">October</option>
                <option value="nov">November</option>
                <option value="dec">December</option>
            </select>
            </div>
        </div>
        <div class="form-control">
            <p>Priority</p>
            <div>
            <label for="high">High</label>
            <input type="radio" name="priority" id="high" value="high" />
            <label for="low">Low</label>
            <input type="radio" name="priority" id="low" value="low" checked />
            </div>
        </div>
        <div class="form-control">
            <label for="project">Project Title</label>
            <input type="text" name="project" id="project" placeholder="Optional" />
        </div>
        <div class="form-control">
            <button type="submit" id="to-do-btn">Create</button>
        </div>
    </form>
`;

const formContainer = document.createElement('div');
formContainer.setAttribute('id', 'todo-form');
const heading = document.createElement('h2');
heading.textContent = 'Create a new task';
formContainer.appendChild(heading);
formContainer.insertAdjacentHTML('beforeend', formHTML);

export default formContainer;
