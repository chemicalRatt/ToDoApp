import logicController from './logic';

const logic = logicController();

logic.addFolder('First Folder');
logic.activeFolder().addItem('testing');

console.log(logic.activeFolder().findItem('testing').getStatus());
