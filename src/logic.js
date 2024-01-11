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
    const setActive = (option) => {
      active = option;
    };

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

  const clearActive = () => { allFolders.forEach((folder) => { folder.setActive(false); }); };
  const addFolder = (name) => {
    const tmp = newFolder(name);
    clearActive();
    tmp.setActive(true);
    allFolders.push(tmp);
  };
  const removeFolder = (id) => {
    allFolders.splice(allFolders[id], 1);
    clearActive();
    allFolders[0].setActive(true);
  };
  const activeFolder = () => allFolders.filter((folder) => folder.getActive() === true)[0];

  return {
    allFolders,
    addFolder,
    removeFolder,
    activeFolder,
    clearActive,
  };
};

export default logicController;
