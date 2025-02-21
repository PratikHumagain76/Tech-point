const cart = {
    items: [],
    addItem(item) {
        this.items.push(item);
        console.log(`${item.name} added to cart`);
    }
};

// ...additional JavaScript code...
