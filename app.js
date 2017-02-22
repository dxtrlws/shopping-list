//Single state object
var state = {
    items: []
}

//state modification functions
var addItem = function(state, item){
    state.items.push(item);
}

var deleteItem

// Render functions
var renderList = function(state, element){
    var itemsHTML = state.items.map(function(item){
        return '<li> <span class="shopping-item">' + item + '</span>' +
                '<div class="Shopping-item-controls">' +
                '<button class="shopping-item-toggle">' +
           '<span class="button-label">check</span>' +
          '</button>' +
          '<button class="shopping-item-delete">' +
            '<span class="button-label">delete</span>' +
          '</button>' +
        '</div>' +
      '</li>'
    });
    element.html(itemsHTML);
}


// Event listeners
$('#js-shopping-list-form').submit(function(event){
    event.preventDefault();
    addItem(state, $('#shopping-list-entry').val());
    renderList(state, $('.shopping-list'));
});

// Check event listeners
$('.shopping-item-toggle').click(function(e){
    $('.shopping-item').toggleClass('shopping-item__checked');
    e.preventDefault;
});