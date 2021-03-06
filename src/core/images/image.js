import { Textures } from '../../../index.js';
import { BMPCreator } from './formats/bmp/bmp.js';

export class Image {
    static texture2bmp(texture) {
        return BMPCreator.fromTopRightTexAbgr(texture.pixels, texture.width, texture.height);
    }

    static bmp2texture(imageBytes) {
        const image = BMPCreator.fromImageBytes2TopRightImage(imageBytes);
        const texture = Textures.createTexture(image.width, image.height);
        texture.pixels = image.pixels;
        return texture;
    }
}