
export default class DataManipulator {

    static data;

    static SetData(data) {
        this.data = data;
    }

    static getAllOrders() {
        const result = [];

        for (const stack in this.data) {
            Object.getOwnPropertyNames(this.data[stack]).map(cell => {
                this.data[stack][cell].map(order => {
                    result.push(order)
                })
            })
        }

        return result;
    }

    static getAllOrdersWithCells() {
        const result = [];

        for (const stack in this.data) {
            Object.getOwnPropertyNames(this.data[stack]).map(cell => {
                this.data[stack][cell].map(order => {
                    result.push({ value: order, cell: cell })
                })
            })
        }

        return result;
    }

    static getAllOrdersCount() {
        let result = 0;

        for (const stack in this.data) {
            Object.getOwnPropertyNames(this.data[stack]).map(cell => {
                this.data[stack][cell].map(order => {
                    ++result;
                })
            })
        }

        return result;
    }

}