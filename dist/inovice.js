"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Inovice = void 0;
const hummus = require("hummus");
var n2words = require('n2words');
const moment = require("moment");
moment.locale('fr');
class Inovice {
    makeInovice(type, ref, articles, maitre, client, payment, jusqua, total) {
        const date = new Date();
        const today = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
        const pdfWriter = hummus.createWriter(`./uploads/${type}/${type === "devis" ? 'devis' : 'facture'}-${ref.replace('/', '-') + '-' + today}.pdf`);
        const page = pdfWriter.createPage(0, 0, 595, 832);
        const cxt = pdfWriter.startPageContentContext(page);
        cxt.drawImage(5, 0, './assets/letterhead.jpg');
        const textOptions = {
            font: pdfWriter.getFontForFile('./assets/Roboto-Black.ttf'),
            size: 16,
            colorspace: 'gray',
            color: 0x00
        };
        const tableTextOption = {
            font: pdfWriter.getFontForFile('./assets/Roboto-Black.ttf'),
            size: 12,
            colorspace: 'gray',
            color: 0x00,
            maxWidth: 300
        };
        cxt.writeText((type === "devis" ? 'Devis' : 'Facture') + " : " + ref, 80, 650, textOptions)
            .writeText("Date: " + date.toLocaleDateString(), 80, 630, textOptions);
        textOptions.font = 12;
        cxt.writeText(client.address, 310, 655, textOptions)
            .writeText("FES- MAROC", 310, 635, textOptions);
        cxt.writeText("Maitre " + maitre, 35, 570, tableTextOption)
            .writeText('Mode de paiement : ' + payment, 170, 570, tableTextOption)
            .writeText((type === "devis" ? "Valable Jusqu'à " : "") + new Date(jusqua).toLocaleDateString(), 350, 570, tableTextOption);
        let posHeight = 520;
        articles.forEach(article => {
            const description = article.libelle;
            cxt.writeText("SERV0" + article.id, 30, posHeight, tableTextOption)
                .writeText(article.pu + "DHs", 370, posHeight, tableTextOption)
                .writeText(article.total + "DHs", 450, posHeight, tableTextOption);
            for (let index = 0; index < description.length; index += 35) {
                const element = description.slice(index, index + 35);
                cxt.writeText(element, 130, posHeight, tableTextOption);
                posHeight -= 20;
                if (posHeight <= 230) {
                    break;
                }
            }
            posHeight -= 10;
        });
        cxt.writeText(`${total} DHs`, 470, 230, tableTextOption)
            .writeText('Total TTC. : ', 370, 230, tableTextOption);
        pdfWriter.writePage(page);
        pdfWriter.end();
        return `./uploads/${type}/${type === "devis" ? 'devis' : 'facture'}-${ref.replace('/', '-') + '-' + today}.pdf`;
    }
    async testNewpage(articles) {
        const date = new Date();
        const today = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
        const pdfWriter = hummus.createWriter(`./uploads/facture.pdf`);
        const page = pdfWriter.createPage(0, 0, 595, 802);
        const cxt = pdfWriter.startPageContentContext(page);
        cxt.drawImage(10, 100, './assets/devis.png');
        const textOptions = {
            font: pdfWriter.getFontForFile('./assets/Roboto-Black.ttf'),
            size: 16,
            colorspace: 'gray',
            color: 0x00
        };
        const tableTextOption = {
            font: pdfWriter.getFontForFile('./assets/Roboto-Black.ttf'),
            size: 12,
            colorspace: 'gray',
            color: 0x00,
            maxWidth: 300
        };
        cxt.writeText('Facture' + " : " + "ref", 380, 750, textOptions)
            .writeText("Date: " + today, 380, 730, textOptions);
        textOptions.font = 12;
        cxt.writeText("client.address", 310, 655, textOptions)
            .writeText("FES- MAROC", 310, 635, textOptions);
        cxt.writeText("Ref/122", 35, 570, tableTextOption)
            .writeText("Maitre " + "maitre", 130, 570, tableTextOption)
            .writeText("payment", 370, 570, tableTextOption)
            .writeText("jusqua", 450, 570, tableTextOption);
        let posHeight = 520;
        let pageisfull = false;
        articles.forEach(article => {
            const description = article.description;
            cxt.writeText(article.ref, 30, posHeight, tableTextOption)
                .writeText(article.pu + "DHs", 370, posHeight, tableTextOption)
                .writeText(article.total + "DHs", 450, posHeight, tableTextOption);
            for (let index = 0; index < description.length; index += 35) {
                const element = description.slice(index, index + 35);
                cxt.writeText(element, 130, posHeight, tableTextOption);
                posHeight -= 20;
                if (posHeight <= 230) {
                    pageisfull = true;
                    break;
                }
            }
            if (pageisfull) {
                pageisfull = false;
                posHeight = 520;
                const page = pdfWriter.createPage(0, 0, 595, 802);
                const cxt = pdfWriter.startPageContentContext(page);
                cxt.drawImage(10, 100, './assets/devis.png');
                cxt.writeText('Facture' + " : " + "ref", 380, 750, textOptions)
                    .writeText("Date: " + today, 380, 730, textOptions);
                textOptions.font = 12;
                cxt.writeText("client.address", 310, 655, textOptions)
                    .writeText("FES- MAROC", 310, 635, textOptions);
                cxt.writeText("Ref/122", 35, 570, tableTextOption)
                    .writeText("Maitre " + "maitre", 130, 570, tableTextOption)
                    .writeText("payment", 370, 570, tableTextOption)
                    .writeText("jusqua", 450, 570, tableTextOption);
                posHeight = 520;
                pdfWriter.writePage(page);
            }
            posHeight -= 10;
        });
        pdfWriter.writePage(page);
        pdfWriter.end();
    }
    createRecu(client, somme, libelle, dateTrans, numCheque, typePay) {
        const date = new Date();
        const today = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
        const pdfWriter = hummus.createWriter(`./uploads/recu/recu-${today}.pdf`);
        const page = pdfWriter.createPage(0, 0, 595, 332);
        const cxt = pdfWriter.startPageContentContext(page);
        const tableTextOption = {
            font: pdfWriter.getFontForFile('./assets/Roboto-Black.ttf'),
            size: 12,
            colorspace: 'gray',
            color: 0x00,
            maxWidth: 300
        };
        const smallText = {
            font: pdfWriter.getFontForFile('./assets/Roboto-Black.ttf'),
            size: 6,
            colorspace: 'gray',
            color: 'darkblue',
            maxWidth: 300
        };
        cxt.drawImage(57, 230, './assets/logob.png', { transformation: { width: 100, height: 100 } });
        cxt.writeText('Avenue Des FAR, Résidence Espace 2000, N 36, 4ème étage - Fès', 20, 230, smallText)
            .writeText('Tél : 05.35.62.43.13 - 06.73.36.72.72 / Fax : 05.35.62.43.14', 25, 220, smallText)
            .writeText('E-mail : loumed-not@gmail.com', 57, 210, smallText);
        cxt.writeText('Reçu de ' + client, 300, 250, tableTextOption)
            .writeText('La somme de      ' + n2words(somme, { lang: 'fr' }) + ' dirhams', 300, 200, tableTextOption)
            .writeText('Pour    ' + libelle, 300, 150, tableTextOption)
            .writeText('Fait à Fès, le ' + (dateTrans === null ? moment().format('llll') : moment(dateTrans).format('llll').replace("00:00", "")), 350, 50, tableTextOption);
        if (typePay === 'Cheque') {
            cxt.writeText('Réf. Folio N˚ à Rappeler', 20, 175, tableTextOption)
                .writeText('Cheque N˚ :  ' + numCheque, 20, 150, tableTextOption);
        }
        else {
            cxt.writeText('Réf. Folio N˚ à Rappeler', 20, 175, tableTextOption)
                .writeText('Mode de paiement :  ESPECE', 20, 150, tableTextOption);
        }
        cxt.writeText('Total :  ' + somme + ' Dirhams', 100, 25, tableTextOption);
        pdfWriter.writePage(page);
        pdfWriter.end();
        return `./uploads/recu/recu-${today}.pdf`;
    }
}
exports.Inovice = Inovice;
//# sourceMappingURL=inovice.js.map