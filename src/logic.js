const allFolders = [];

// folder-related functions
const newFolder = (folderName) => {
  let name = folderName;
  let status = false;
  const itemList = [];

  const getName = () => name;
  const setName = (newName) => { name = newName; };
  const getStatus = () => status;
  const setStatus = (option) => { status = option; };

  return {
    itemList, getStatus, setStatus, getName, setName,
  };
};
const setActiveFolder = (name) => {
  allFolders.forEach((folder) => { folder.setStatus(false); });
  allFolders.find((folder) => folder.getName() === name).setStatus(true);
};
const addFolder = (name) => {
  allFolders.push(newFolder(name));
  setActiveFolder(name);
};
const removeFolder = (name) => {
  allFolders.splice(allFolders.find((folder) => folder.getName() === name), 1);
  setActiveFolder(allFolders[0].getName());
};
const activeFolder = () => allFolders.filter((folder) => folder.getStatus() === true)[0];

// item-related functions
const newItem = (itemContent) => {
  let content = itemContent;
  let status = false;

  const getContent = () => content;
  const setContent = (update) => { content = update; };
  const getStatus = () => status;
  const setStatus = (option) => { status = option; };

  return {
    getContent, setContent, getStatus, setStatus,
  };
};
const addItem = (content) => {
  activeFolder().itemList.push(newItem(content));
};
const removeItem = (content) => {
  const rmItem = activeFolder().itemList.find((item) => item.getContent() === content);
  activeFolder().itemList.splice(rmItem, 1);
};

export {
  allFolders, addFolder, removeFolder, setActiveFolder,
  addItem, removeItem, activeFolder,
};
