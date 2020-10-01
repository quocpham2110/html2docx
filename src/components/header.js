import {
  Header,
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

// const logo = Media.addImage(
//   doc,
//   fs.readFileSync("./demo/images/pizza.gif"),
//   200,
//   200,
//   {
//     floating: {
//       horizontalPosition: {
//         offset: 1014400,
//       },
//       verticalPosition: {
//         offset: 1014400,
//       },
//     },
//   }
// );

const table = new Table({
  row: [],
  cantSplit: true,
});
const tabelRow = new TableRow({
  children: [
    new TableCell({
      children: [new Paragraph("hello")],
    }),
  ],
});

const helloWord = new TextRun({
  text: "Header",
  bold: true,
});

const paragraph = new Paragraph({
  children: [helloWord],
});

export const header = new Header({
  children: [paragraph],
});
