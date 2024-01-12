const DomController = () => {
  const ROOT = document.getElementById('content');

  const ILIST = document.getElementById('t-list');

  const initDom = () => {
    const header = document.createElement('header');
    header.innerText = 'ToDo App';
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

  const clearProjects = () => {
    const PLIST = document.getElementById('p-list');
    PLIST.innerText = '';
  };

  const setActiveProject = (id) => {
    document.getElementById(id).classList.add('active-project');
  };

  return {
    initDom, addProject, clearProjects, setActiveProject,
  };
  // render
  // clear
};

export default DomController;
