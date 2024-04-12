import fs from 'fs';

export default class ImageController {
    uploadImage(image:string): any {
        
        // Reads file in form buffer => <Buffer ff d8 ff db 00 43 00 ...
        const buffer = fs.readFileSync("");
        // Pipes an image with "new-path.jpg" as the name.
        fs.writeFileSync("new-path.jpg", buffer);
    }

    decodeimage(image:string): any {
        const matches = dataString.match(/^data:([A-Za-z-+/]+);base64,(.+)$/);
        if (matches?.length !== 3) {
            throw new Error('Invalid input string');
        }

        // Décodage de Base64 en buffer binaire
        const buffer = Buffer.from(matches[2], 'base64');
    }
}