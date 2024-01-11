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

  return { init };
};

export default domController;
// f: create base layout
// f: new folder, remove folder, etc.
