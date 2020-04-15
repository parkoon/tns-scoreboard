import download from 'downloadjs';
import htmlToImage from 'html-to-image';

export const downloadImage = (html: HTMLElement) => {
    htmlToImage.toPng(html).then(function (dataUrl) {
        download(dataUrl, 'my-node.png');
    });
};

export const downloadImageToJPEG = (html: HTMLElement) => {
    htmlToImage.toJpeg(html, { quality: 0.95 }).then(function (dataUrl) {
        var link = document.createElement('a');
        link.download = 'my-image-name.jpeg';
        link.href = dataUrl;
        link.click();
    });
};

export const appendImage = (html: HTMLElement, target?: HTMLElement) => {
    htmlToImage
        .toPng(html)
        .then(function (dataUrl) {
            var img = new Image();
            img.src = dataUrl;
            document.body.appendChild(img);
        })
        .catch(function (error) {
            console.error('oops, something went wrong!', error);
        });
};
