export class Resolutions {
    private static resolutions = [
        [1920, 1080],
        [1024,  768],
        [1280,  800],
        [1280, 1024],
        [1366,  768]
    ]

    static get All() { return this.resolutions; }
}