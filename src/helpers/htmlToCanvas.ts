import html2canvas from 'html2canvas';
import download from 'downloadjs';

export const htmlToCanvas = (html: HTMLElement) => {
    html2canvas(html).then(function (canvas) {
        document.body.appendChild(canvas);
        const dataUrl = canvas.toDataURL();
        download(dataUrl, 'my-node.png');
        console.log(canvas);
    });
};
