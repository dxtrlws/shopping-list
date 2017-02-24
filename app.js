//Single state object
var state = {
    items: []
}

//state modification functions
function addItem(state, item) {
    state.items.push(item);
}

function deleteItem(state, item) {
    state.items.splice(item, 1);
}


// Render functions
function renderList(state, element) {
    var itemsHTML = state.items.map(function (item) {
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
// Add new item to shopping list
function formAddItems() {
    $('#js-shopping-list-form').submit(function (event) {
        event.preventDefault();
        addItem(state, $('#shopping-list-entry').val());
        renderList(state, $('.shopping-list'));
        this.reset();
    });

}


// Add strikethrough to shopping list item
function addStrike() {
    $('.shopping-list').on("click", ".shopping-item-toggle", function () {

        $(this).closest("li").toggleClass('shopping-item__checked');

    });


}

// Delete shopping list item
function removeItem() {
    $('.shopping-list').on("click", ".shopping-item-delete", function () {

        // $(this).closest('li').remove();
        var itemIndex = parseInt($(this).closest("li"));

        deleteItem(state, itemIndex);
        renderList(state, $('.shopping-list'));
    });


}


$(function () {

    formAddItems();
    addStrike();
    removeItem();

});