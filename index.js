
require('datejs');

function combineUsers(...args) {
  const combinedObject = {
    users: []
  };

  for (const userArray of args) {
    if (Array.isArray(userArray)) {
      combinedObject.users.push(...userArray);
    }
  }

  combinedObject.merge_date = Date.today().toString('M/d/yyyy');

  return combinedObject;
}

module.exports = {
  combineUsers
};