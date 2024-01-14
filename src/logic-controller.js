/* eslint-disable no-param-reassign */
/* eslint-disable prefer-const */
const NewItem = (itemContent) => {
  let content = itemContent;
  let isComplete = false;
  return { content, isComplete };
};

const NewProject = (projectName) => {
  const ITEMS = [];
  let name = projectName;
  let isActive = false;
  const addItem = (input) => { ITEMS.push(NewItem(input)); };
  const removeItem = (id) => { ITEMS.splice(id, 1); };

  return {
    ITEMS, name, isActive, addItem, removeItem,
  };
};

const LogicController = () => {
  let PROJECTS = [];
  const getActiveProject = () => PROJECTS.find((project) => project.isActive === true);
  const setActiveProject = (id) => {
    PROJECTS.forEach((project) => { project.isActive = false; });
    PROJECTS[id].isActive = true;
  };
  const addProject = (input) => {
    PROJECTS.push(NewProject(input));
    setActiveProject(Number(PROJECTS.length) - 1);
  };
  const removeProject = () => {
    if (PROJECTS.length > 1) {
      PROJECTS.splice(PROJECTS.indexOf(getActiveProject()), 1);
      setActiveProject(0);
    }
  };

  return {
    PROJECTS, addProject, removeProject, getActiveProject, setActiveProject,
  };
};

export default LogicController;
