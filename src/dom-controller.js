const DomController = () => {
  const ROOT = document.getElementById('content');

  const initDom = () => {
    const header = document.createElement('header');
    header.innerText = 'To Do List';
    document.body.insertBefore(header, document.body.firstChild);

    const footer = document.createElement('footer');
    footer.innerText = '@chemicalRatt';
    document.body.appendChild(footer);

    const sideBar = document.createElement('div');
    sideBar.classList.add('side-bar');

    sideBar.id = 'p-list';

    const taskList = document.createElement('div');
    taskList.classList.add('task-list');
    taskList.id = 't-list';
    ROOT.append(sideBar, taskList);
  };

  const addProject = (name, id) => {
    const PLIST = document.getElementById('p-list');
    const tmp = document.createElement('div');
    tmp.classList.add('project');
    tmp.id = id;
    tmp.innerText = name;
    PLIST.appendChild(tmp);
  };

  const resetLists = () => {
    const pList = document.getElementById('p-list');
    pList.innerText = '';
    const tList = document.getElementById('t-list');
    tList.innerText = '';

    const addPButton = document.createElement('button');
    addPButton.innerText = 'New Project';
    addPButton.id = 'new-project-button';

    const deletePButton = document.createElement('button');
    deletePButton.innerText = 'Delete Project';
    deletePButton.id = 'delete-project-button';

    pList.append(addPButton, deletePButton);
  };

  const setActiveProject = (id) => {
    document.getElementById(id).classList.add('active-project');
  };

  const addTask = (content, status, id) => {
    const TLIST = document.getElementById('t-list');
    const tmp = document.createElement('div');
    tmp.classList.add('task');
    tmp.id = id;
    tmp.innerText = content;
    if (status === true) {
      tmp.classList.add('completed');
    }

    const tmpBtn = document.createElement('INPUT');
    tmpBtn.setAttribute('type', 'checkbox');
    tmpBtn.classList.add('checkbox');

    tmpBtn.checked = status;
    tmp.insertBefore(tmpBtn, tmp.firstChild);
    TLIST.appendChild(tmp);
  };

  return {
    initDom, addProject, resetLists, setActiveProject, addTask,
  };
  // render
  // clear
};

export default DomController;
