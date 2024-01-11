import logicController from './logic';
import domController from './dom';

const logic = logicController();
const dom = domController();

function renderFolders() {
  logic.allFolders.forEach((folder, index) => {
    dom.addFolder(folder.getName(), index);
  });
  dom.setActiveFolder(logic.allFolders.indexOf(logic.activeFolder()));
  document.querySelectorAll('.folder').forEach((folder) => {
    folder.addEventListener('click', () => {
      logic.clearActive();
      logic.allFolders[folder.id].setActive(true);
      dom.clearFolders();
      dom.init();
      renderFolders();
    });
  });
}

dom.init();
logic.addFolder('Default Folder');
logic.addFolder('New Folder');
renderFolders();

console.log(logic.allFolders.indexOf(logic.activeFolder()));
