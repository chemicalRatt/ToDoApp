// domController
const domController = () => {
  const root = document.getElementById('content');
  const sideBar = document.createElement('div');
  const taskList = document.createElement('div');

  const init = () => {
    sideBar.id = 'side-bar';
    taskList.id = 'task-list';
    root.append(sideBar, taskList);
    const title = document.createElement('div');
    title.id = 'title';
    title.innerText = 'To-Do App';
    sideBar.appendChild(title);
  };

  const addFolder = (name, id) => {
    const tmp = document.createElement('div');
    tmp.innerText = name;
    tmp.classList.add('folder');
    tmp.id = id;
    sideBar.appendChild(tmp);
    console.log(tmp.id);
  };

  const setActiveFolder = (id) => {
    document.querySelectorAll('div').forEach((el) => el.classList.remove('active-folder'));
    document.getElementById(id).classList.add('active-folder');
  };

  const clearFolders = () => {
    while (sideBar.lastChild) {
      sideBar.removeChild(sideBar.lastChild);
    }
  };

  return {
    init, addFolder, setActiveFolder, clearFolders,
  };
};

export default domController;
// f: create base layout
// f: new folder, remove folder, etc.
