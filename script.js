// Grab filter

let sortList = document.getElementById('sortList');

// Add event listener

sortList.addEventListener('keyup', sortNames);

function sortNames() {
    // Get value of input
    let filterValue = document.getElementById('sortList').value.toUpperCase();
    
    // Get names ul
    let ul = document.getElementById('contacts');
    // Get li
    let li = ul.querySelectorAll('li.collection-item');

    // Loop through collection items
    for(let i = 0;i < li.length;i++){
        let a = li[i].getElementsByTagName('a')[0];
        // if matched
        if(a.innerHTML.toUpperCase().indexOf(filterValue) > -1 ){
            li[i].style.display = ' ';
        } else {
            li[i].style.display = 'none';
        }
    }
}