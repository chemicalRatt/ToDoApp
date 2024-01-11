const NewItem = (itemContent) => {
  const content = itemContent;
  const isComplete = false;
  return { content, isComplete };
};

const NewProject = (projectName) => {
  const ITEMS = [];
  const name = projectName;
  const isActive = false;
  const addItem = (input) => { ITEMS.push(NewItem(input)); };
  const removeItem = (id) => { ITEMS.splice(id, 1); };

  return {
    ITEMS, name, isActive, addItem, removeItem,
  };
};

const LogicController = () => {
  const PROJECTS = [];
  const addProject = (input) => { PROJECTS.push(NewProject(input)); };
  const removeProject = (id) => { PROJECTS.splice(id, 1); };
  const getActiveProject = () => { PROJECTS.find((project) => project.isActive); };
  const setActivePrjoect = (id) => { PROJECTS[id].isActive = true; };

  return {
    PROJECTS, addProject, removeProject, getActiveProject, setActivePrjoect,
  };
};

export default LogicController;
