"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Inovice = void 0;
const hummus = require("hummus");
class Inovice {
    makeInovice(type, ref, articles, maitre, client, payment, jusqua, total) {
        const date = new Date();
        const today = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
        let pageIsFull = false;
        const pdfWriter = hummus.createWriter(`./uploads/${type}/${type === "devis" ? 'devis' : 'facture'}-${ref + '-' + today}.pdf`);
        const page = pdfWriter.createPage(0, 0, 595, 802);
        const cxt = pdfWriter.startPageContentContext(page);
        cxt.drawImage(10, 100, './assets/devis.png');
        const textOptions = {
            font: pdfWriter.getFontForFile('./assets/SpecialElite-Regular.ttf'),
            size: 16,
            colorspace: 'gray',
            color: 0x00
        };
        const tableTextOption = {
            font: pdfWriter.getFontForFile('./assets/SpecialElite-Regular.ttf'),
            size: 12,
            colorspace: 'gray',
            color: 0x00,
            maxWidth: 300
        };
        cxt.writeText((type === "devis" ? 'Devis' : 'Facture') + " : " + ref, 380, 750, textOptions)
            .writeText("Date: " + today, 380, 730, textOptions);
        textOptions.font = 12;
        cxt.writeText(client.address, 310, 655, textOptions)
            .writeText("FES- MAROC", 310, 635, textOptions);
        cxt.writeText("Ref/122", 35, 570, tableTextOption)
            .writeText("Maitre " + maitre, 130, 570, tableTextOption)
            .writeText(payment, 370, 570, tableTextOption)
            .writeText(jusqua, 450, 570, tableTextOption);
        let posHeight = 520;
        articles.forEach(article => {
            const description = article.description + " x " + article.qte;
            cxt.writeText(article.ref, 30, posHeight, tableTextOption)
                .writeText(article.pu + "DHs", 370, posHeight, tableTextOption)
                .writeText(article.total + "DHs", 450, posHeight, tableTextOption);
            for (let index = 0; index < description.length; index += 35) {
                const element = description.slice(index, index + 35);
                cxt.writeText(element, 130, posHeight, tableTextOption);
                posHeight -= 20;
                if (posHeight <= 230) {
                    break;
                    pageIsFull = true;
                }
            }
            posHeight -= 10;
        });
        cxt.writeText(`${total} DHs`, 450, 230, tableTextOption)
            .writeText('20%', 450, 210, tableTextOption)
            .writeText(`${total + (total * 0.2)} DHs`, 450, 190, tableTextOption);
        pdfWriter.writePage(page);
        pdfWriter.end();
        return `./uploads/${type}/${type === "devis" ? 'devis' : 'facture'}-${ref + '-' + today}.pdf`;
    }
}
exports.Inovice = Inovice;
//# sourceMappingURL=inovice.js.map