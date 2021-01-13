import * as hummus from 'hummus'
import { Brackets } from 'typeorm';

export class Inovice {
    makeInovice(type: string, ref, articles: any[], maitre: string, client: any, payment: string, jusqua, total: number) {
        const date = new Date()
        const today = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;


        const pdfWriter = hummus.createWriter(`./uploads/${type}/${type === "devis" ? 'devis' : 'facture'}-${ref.replace('/', '-') + '-' + today}.pdf`);
        const page = pdfWriter.createPage(0, 0, 595, 832)
        const cxt = pdfWriter.startPageContentContext(page);
        cxt.drawImage(5, 0, './assets/letterhead.jpg');

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
        }


        cxt.writeText((type === "devis" ? 'Devis' : 'Facture') + " : " + ref, 380, 750, textOptions)
            .writeText("Date: " + today, 380, 730, textOptions)
        textOptions.font = 12;
        cxt.writeText(client.address, 310, 655, textOptions)
            .writeText("FES- MAROC", 310, 635, textOptions)


        cxt.writeText(ref, 35, 570, tableTextOption)
            .writeText("Maitre " + maitre, 130, 570, tableTextOption)
            .writeText(payment, 370, 570, tableTextOption)
            .writeText(jusqua, 450, 570, tableTextOption)

        let posHeight = 520;

        // ---- To fill the table put this in a loop -----
        // const description = "The drawImage requires 3 parameters - the first 2 are coordinates (bottom left corner and the third is an image path.";
        // cxt.writeText('Ref12', 30, posHeight, tableTextOption)
        //     .writeText('3200 DHs', 370, posHeight, tableTextOption)
        //     .writeText('3200 DHs', 450, posHeight, tableTextOption)
        // for (let index = 0; index < description.length; index += 35) {
        //     const element = description.slice(index, index + 35);
        //     cxt.writeText(element, 130, posHeight, tableTextOption)
        //     posHeight -= 20;
        // }
        // cxt.writeText('Ref52', 30, posHeight, tableTextOption)
        //     .writeText('1200 DHs', 370, posHeight, tableTextOption)
        //     .writeText('1200 DHs', 450, posHeight, tableTextOption)
        // for (let index = 0; index < description.length; index += 35) {
        //     const element = description.slice(index, index + 35);
        //     cxt.writeText(element, 130, posHeight, tableTextOption)
        //     posHeight -= 20;
        // }

        // ----- to here -----
        articles.forEach(article => {
            const description = article.libelle;
            cxt.writeText("SERV0" + article.id, 30, posHeight, tableTextOption)
                .writeText(article.pu + "DHs", 370, posHeight, tableTextOption)
                .writeText(article.total + "DHs", 450, posHeight, tableTextOption)
            for (let index = 0; index < description.length; index += 35) {
                const element = description.slice(index, index + 35);
                cxt.writeText(element, 130, posHeight, tableTextOption)
                posHeight -= 20;
                if (posHeight <= 230) {
                    break;
                }
            }

            posHeight -= 10;
        });


        // total ht, tva & ttc
        cxt.writeText(`${total} DHs`, 450, 230, tableTextOption)
            .writeText('Total TTC. : ', 370, 230, tableTextOption)
        //.writeText('20%', 450, 210, tableTextOption)
        //.writeText(`${total} DHs`, 450, 190, tableTextOption)


        pdfWriter.writePage(page);

        pdfWriter.end()


        return `./uploads/${type}/${type === "devis" ? 'devis' : 'facture'}-${ref.replace('/', '-') + '-' + today}.pdf`;
    }


    async testNewpage(articles) {
        const date = new Date()
        const today = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;

        const pdfWriter = hummus.createWriter(`./uploads/facture.pdf`);
        const page = pdfWriter.createPage(0, 0, 595, 802)
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
        }
        cxt.writeText('Facture' + " : " + "ref", 380, 750, textOptions)
            .writeText("Date: " + today, 380, 730, textOptions)
        textOptions.font = 12;
        cxt.writeText("client.address", 310, 655, textOptions)
            .writeText("FES- MAROC", 310, 635, textOptions)


        cxt.writeText("Ref/122", 35, 570, tableTextOption)
            .writeText("Maitre " + "maitre", 130, 570, tableTextOption)
            .writeText("payment", 370, 570, tableTextOption)
            .writeText("jusqua", 450, 570, tableTextOption)

        let posHeight = 520;
        let pageisfull = false;
        articles.forEach(article => {
            const description = article.description;
            cxt.writeText(article.ref, 30, posHeight, tableTextOption)
                .writeText(article.pu + "DHs", 370, posHeight, tableTextOption)
                .writeText(article.total + "DHs", 450, posHeight, tableTextOption)

            for (let index = 0; index < description.length; index += 35) {
                const element = description.slice(index, index + 35);
                cxt.writeText(element, 130, posHeight, tableTextOption)
                posHeight -= 20;
                if (posHeight <= 230) {
                    pageisfull = true;
                    break;
                }

            }
            if (pageisfull) {
                pageisfull = false;
                posHeight = 520;

                const page = pdfWriter.createPage(0, 0, 595, 802)
                const cxt = pdfWriter.startPageContentContext(page);
                cxt.drawImage(10, 100, './assets/devis.png');
                cxt.writeText('Facture' + " : " + "ref", 380, 750, textOptions)
                    .writeText("Date: " + today, 380, 730, textOptions)
                textOptions.font = 12;
                cxt.writeText("client.address", 310, 655, textOptions)
                    .writeText("FES- MAROC", 310, 635, textOptions)


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

        pdfWriter.end()
    }

    createRecu() {
        const date = new Date()
        const today = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;

        const pdfWriter = hummus.createWriter(`./uploads/recu/recu-${today}.pdf`);
        const page = pdfWriter.createPage(0, 0, 595, 332)
        const cxt = pdfWriter.startPageContentContext(page);

        cxt.drawImage(30, 230, './assets/logo.jpeg', { transformation: { width: 100, height: 100 } });

        const tableTextOption = {
            font: pdfWriter.getFontForFile('./assets/SpecialElite-Regular.ttf'),
            size: 12,
            colorspace: 'gray',
            color: 0x00,
            maxWidth: 300
        }

        cxt.writeText('Reçu de       ' + today, 300, 250, tableTextOption)
            .writeText('La somme de      ' + 3000 + '  DHs', 300, 200, tableTextOption)
            .writeText('Pour      ', 300, 150, tableTextOption)
            .writeText('Fait à Fès le      ' + today, 300, 150, tableTextOption)


        cxt.writeText('Réf. Folio N˚ à Rappeler', 20, 175, tableTextOption)
            .writeText('Cheque N˚ ....................................', 20, 150, tableTextOption)
            .writeText('Sur ............................................', 20, 125, tableTextOption)
        cxt.writeText('Cheque N˚ ....................................', 20, 100, tableTextOption)
            .writeText('Sur ............................................', 20, 75, tableTextOption)

        cxt.writeText('Numéraire : .................................', 20, 50, tableTextOption)
            .writeText('Total : ............................', 70, 25, tableTextOption)





        pdfWriter.writePage(page);

        pdfWriter.end()

        return `./uploads/recu/recu-${today}.pdf`;
    }

}