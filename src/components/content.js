import {
  Paragraph,
  TextRun,
  // HorizontalPositionAlign,
  // HorizontalPositionRelativeFrom,
  // Media,
  // VerticalPositionAlign,
  // VerticalPositionRelativeFrom,
} from "docx";

const helloWord = new TextRun({
  text: "Content",
  bold: true,
});
const main = new TextRun({
  text: "Testing",
  bold: true,
});

export const content = new Paragraph({
  children: [helloWord, main],
  bullet: {
    level: 0,
  },
});
