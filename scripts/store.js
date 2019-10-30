import item from './item.js';

const items= [];
const hideCheckedItems= false;

function findById(id){
  return items.find(item=>item.id===id);
}
function addItem(name){
  try {
    item.validateName(name);
    items.push(item.create(name));
  }
  catch(error){
    console.log(error);
  }
}

function toggleCheckedFilter(){
  this.hideCheckedItems=!this.hideCheckedItems;
}
function findAndToggleChecked(id){
  // const itemIndex = items.findIndex(item=>item===findById(id));
  findById(id).checked = !findById(id).checked;
  // items[itemIndex].checked= !items[itemIndex].checked;
  
}

function findAndUpdateName(id, newName){
  try {
    item.validateName(newName);

    // const itemIndex = items.findIndex(item=>item===findById(id));
    // items[itemIndex].name = newName;

    findById(id).name = newName;
 
    
  }
  catch (error) {
    console.log(`cannot Update name: ${error.message}`);
  }
}

function findAndDelete(id){
  let thisItemIndex = items.findIndex(item=>item.id===id);
  items.splice(thisItemIndex, 1);
}


export default{
  items, 
  hideCheckedItems,
  findById,
  addItem,
  findAndToggleChecked,
  findAndUpdateName,
  findAndDelete,
  toggleCheckedFilter
};