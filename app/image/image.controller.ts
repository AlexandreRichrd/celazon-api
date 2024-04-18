import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

export default class ImageController {
    static async saveBase64Image(base64Image: string): Promise<string> {
        const matches = base64Image.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);
        if (!matches || matches.length !== 3) {
            throw new Error('Invalid base64 data');
        }
        const imageBuffer = Buffer.from(matches[2], 'base64');

        const dirname = path.dirname(fileURLToPath(import.meta.url));
        const uploadPath = path.resolve(dirname, '../../../images/');

        const filename = `image_${Date.now()}.jpg`;

        fs.writeFileSync(path.join(uploadPath, filename), imageBuffer);

        return "http://localhost:8081/images/" + filename;
    }
}
