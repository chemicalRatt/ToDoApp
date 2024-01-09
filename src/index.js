import controller from './logic';

const logic = controller();

logic.addFolder('First Folder');
logic.activeFolder().addItem('testing');

console.log(logic.activeFolder().findItem('testing').getStatus());
