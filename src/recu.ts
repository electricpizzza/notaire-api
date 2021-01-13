import * as hummus from 'hummus'

export class Recu {
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

    }
}