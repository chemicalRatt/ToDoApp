import LogicController from './logic-controller';
import DomController from './dom-controller';

const LOGIC = LogicController();
const DOM = DomController();

DOM.initDom();

const addListeners = () => {
  document.querySelectorAll('.project').forEach((project) => {
    project.addEventListener('click', () => {
      LOGIC.setActiveProject(project.id);
      // eslint-disable-next-line no-use-before-define
      RenderDom();
    });
  });

  document.querySelectorAll('.checkbox').forEach((box) => {
    box.addEventListener('change', () => {
      if (box.checked) {
        LOGIC.getActiveProject().ITEMS[box.parentElement.id].isComplete = true;
        box.parentElement.classList.add('completed');
      } else {
        LOGIC.getActiveProject().ITEMS[box.parentElement.id].isComplete = false;
        box.parentElement.classList.remove('completed');
      }
    });
  });
};

const RenderDom = () => {
  DOM.clearAll();
  LOGIC.PROJECTS.forEach((project, index) => {
    DOM.addProject(project.name, index);
    if (project.isActive) {
      DOM.setActiveProject(index);
    }
  });

  LOGIC.getActiveProject().ITEMS.forEach((item, index) => {
    DOM.addTask(item.content, item.isComplete, index);
  });

  addListeners();
};

LOGIC.addProject('New Project');
LOGIC.getActiveProject().addItem('Testing Item');
LOGIC.addProject('New Project');
RenderDom();

// render items
