// folder-related functions

const logicController = () => {
  const allFolders = [];
  const newFolder = (folderName) => {
    let name = folderName;
    let active = false;
    const itemList = [];

    const getName = () => name;
    const setName = (newName) => { name = newName; };
    const getActive = () => active;
    const setActive = (option) => { active = option; };

    const findItem = (content) => itemList.find((item) => item.getContent() === content);
    const newItem = (newContent) => {
      let content = newContent;
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
      itemList.push(newItem(content));
    };

    const removeItem = (content) => {
      itemList.splice(findItem(content), 1);
    };

    return {
      itemList,
      getActive,
      setActive,
      getName,
      setName,
      addItem,
      findItem,
      removeItem,
    };
  };
  const setActiveFolder = (name) => {
    allFolders.forEach((folder) => { folder.setActive(false); });
    allFolders.find((folder) => folder.getName() === name).setActive(true);
  };
  const addFolder = (name) => {
    allFolders.push(newFolder(name));
    setActiveFolder(name);
  };
  const removeFolder = (name) => {
    allFolders.splice(allFolders.find((folder) => folder.getName() === name), 1);
    setActiveFolder(allFolders[0].getName());
  };
  const activeFolder = () => allFolders.filter((folder) => folder.getActive() === true)[0];

  return {
    allFolders,
    addFolder,
    removeFolder,
    setActiveFolder,
    activeFolder,
  };
};

export default logicController;
