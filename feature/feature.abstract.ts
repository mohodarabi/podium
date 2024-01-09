export abstract class Feature {
    status: boolean

    constructor(status: boolean) {
        this.status = status;
    }

    hasIt(): boolean {
        return this.status
    }
}