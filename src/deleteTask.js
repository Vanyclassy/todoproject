const deleteTask = function(e) {
    console.log("Delete Task...", e);
    let listItem = e.target.parentNode;
    let ul = listItem.parentNode;
    ul.removeChild(listItem);
};


export default deleteTask;