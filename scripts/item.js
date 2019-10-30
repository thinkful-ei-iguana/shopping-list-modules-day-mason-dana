
function validateName(name){
  if (!name) throw new TypeError('name must not blank');
    
}

function create(name){
  return{
    id: cuid(),
    name,
    checked: false
  };
}
export default {
  validateName,
  create,
};