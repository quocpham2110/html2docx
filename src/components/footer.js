import {
  Footer,
  Paragraph,
  TextRun,
  // HorizontalPositionAlign,
  // HorizontalPositionRelativeFrom,
  // Media,
  // VerticalPositionAlign,
  // VerticalPositionRelativeFrom,
} from "docx";

const helloWord = new TextRun({
  text: "Footer",
  bold: true,
});

const paragraph = new Paragraph({
  children: [helloWord],
});

export const footer = new Footer({
  children: [paragraph],
});
