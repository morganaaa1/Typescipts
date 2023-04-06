import ListItem from "./ListItem";

interface List {
    list: ListItem[],
    load(): void,
    save(): void,
    clearList(): void,
    addItem(itemObj: ListItem): void,
    removeItem(id: string): void,
}

export default class FullList implements List {

    static instance: FullList = new FullList();

    private constructor(
        private _list: ListItem[] = []
    ) {}

    get list(): ListItem[] {
        return this._list;
    }

    set list(list: ListItem[]) {
        this._list = list;
    }

    save(): void {
        localStorage.setItem('list', JSON.stringify(this.list));
    }

    load(): void {
        const storedList: string | null = localStorage.getItem('mylist');
        if (typeof storedList !== 'string') return;

        const parsedList: { _id: string, _item: string, _checked: boolean }[] = JSON.parse(storedList);

        parsedList.forEach(itemObj => {
            const newListItem = new ListItem(itemObj._id, itemObj._item, itemObj._checked);
            FullList.instance.addItem(newListItem);
        });
    }

    clearList(): void {
        this._list = [];
        this.save();
    }

    addItem(itemObj: ListItem): void {
        this._list.push(itemObj);
        this.save();
    }

    removeItem(id: string): void {
        this._list = this.list.filter(item => item.id !== id);
        this.save();
    }
}