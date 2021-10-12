// This is looping each item to match the item with the id
// and then return what that item is if it mathces the id
export function findById(id, items) {
    for (let item of items) {
        if (item.id === id) {
            return item;
        }
    }
}