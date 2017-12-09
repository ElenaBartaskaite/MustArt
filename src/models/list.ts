export class List<T> {
    private items: Array<T>;

    constructor(resolutions?) {
        if (resolutions) {
            this.items = resolutions;
        }
        else {
            this.items = [];
        }
    }

    size(): number {
        return this.items.length;
    }

    add(value: T): void {
        this.items.push(value);
    }

    get(index: number): T {
        return this.items[index];
    }
}