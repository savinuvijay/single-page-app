export class SampleDataService {
    static state = [];

    static addItem(item) {
        this.state.push(item);
    }

    static getItem(id) {
        return this.state.find((i) => i.id === id);
    }
}

/*

state = [
    {
        id: 0,
        value: "Item 0"
    },
    {
        id: 1,
        value: "Item 1"
    }
]

*/
