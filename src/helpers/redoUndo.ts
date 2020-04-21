import serialize from 'serialize-javascript';

class RedoUndo {
    redoStack: string[];
    undoStack: string[];

    constructor() {
        this.redoStack = [];
        this.undoStack = [];
    }

    take(data: any) {
        this.undoStack.push(serialize(data));
        this.redoStack = [];
    }

    undo(data: any) {
        if (this.undoStack.length > 0) {
            const dump = this.undoStack.pop();
            this.redoStack.push(serialize(data));
            return dump;
        }
    }

    redo(data: any) {
        if (this.redoStack.length > 0) {
            const dump = this.redoStack.pop();
            this.undoStack.push(serialize(data));
            return dump;
        }
    }
}

export default RedoUndo;
