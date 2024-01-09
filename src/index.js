import {
  allFolders, addFolder, removeFolder, setActiveFolder, activeFolder,
  addItem,
  removeItem,
} from './logic';

addFolder('Folder One');
addItem('This is some testing content.');
addItem('This is some OTHER testing content.');
removeItem('This is some testing content.');
activeFolder().itemList[0].setStatus(true);

allFolders.forEach((folder) => {
  console.log(folder.itemList[0].getStatus());
});

// TODO: REFACTOR OBJECTS SO THAT FOLDERS HAVE ITEM FUNCTIONS...
