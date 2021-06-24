const PDFDocument = require("pdfkit");
const fs = require("fs");

exports.createPDF = (userName, tasks) => {
  var doc = new PDFDocument();

  doc.fontSize(25).text(`${userName}'s Tasks`, 100, 80);

  let width = 100;
  let height = 150;

  for (let task of tasks) {
    doc
      .text(task.taskName, width, height)
      .font("Helvetica", 25)
      .moveDown()
      .text(task.taskDescription, {
        width: 412,
        indent: 30,
      })
      .moveDown()
      .text(task.taskDateTime.toLocaleDateString(), {
        width: 412,
        indent: 30,
      });
    height = height + 200;
  }

  doc.pipe(fs.createWriteStream("output.pdf"));
  doc.end();
};
