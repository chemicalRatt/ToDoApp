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
};

const RenderDom = () => {
  DOM.clearProjects();
  LOGIC.PROJECTS.forEach((project, index) => {
    DOM.addProject(project.name, index);
    if (project.isActive) {
      DOM.setActiveProject(index);
    }
  });
  addListeners();
};

LOGIC.addProject('New Project');
LOGIC.getActiveProject().addItem('Testing Item');
RenderDom();

// render items
