import React from "react";
import { saveAs } from "file-saver";
import {
  Document,
  Packer,
  Header,
  Footer,
  Paragraph,
  TextRun,
  Table,
  TableRow,
  TableCell,
  Media,
  // HorizontalPositionAlign,
  // HorizontalPositionRelativeFrom,
  // VerticalPositionAlign,
  // VerticalPositionRelativeFrom,
} from "docx";
// import { header, footer, content } from "./components/all";

function App() {
  const generate = async () => {
    const doc = new Document();
    // HEADER
    const blob = await fetch(
      "https://raw.githubusercontent.com/dolanmiu/docx/master/demo/images/cat.jpg"
    ).then((r) => r.blob());
    const logo = Media.addImage(doc, blob);

    const tabelRow = new TableRow({
      children: [
        new TableCell({
          children: [new Paragraph(logo)],
        }),
      ],
    });
    const table = new Table({
      rows: [tabelRow],
    });

    // const helloWord = new TextRun({
    //   text: "Header",
    //   bold: true,
    // });

    // const paragraph = new Paragraph({
    //   children: [helloWord],
    // });

    const header = new Header({
      children: [table],
    });

    // FOOTER

    // CONTENT

    // GENERATOR
    doc.addSection({
      headers: {
        default: header,
      },
      footers: {
        default: new Footer({ children: [new Paragraph("Footer")] }),
      },
      children: [new Paragraph("Content")],
    });
    Packer.toBlob(doc).then((blob) => {
      saveAs(blob, "Offer Letter.docx");
    });
  };
  return (
    <div className="App">
      <button onClick={generate}>Generate!</button>
    </div>
  );
}

export default App;
