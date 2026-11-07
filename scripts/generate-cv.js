const fs = require('fs');
const path = require('path');

const targetDir = path.join(__dirname, '..', 'assets', 'docs');
const targetFile = path.join(targetDir, 'CV-Leandre-Ngadji.pdf');

fs.mkdirSync(targetDir, { recursive: true });

const text = [
  'Léandre Ngadji',
  'Développeur web et mobile junior',
  'Email : ngaleandre6@gmail.com',
  'Téléphone : +237 687510085',
  'Douala, Cameroun'
];

const lines = text
  .map((line, index) => {
    const y = 780 - index * 34;
    return `/${index === 0 ? 'F1' : 'F1'} 12 Tf 50 ${y} Td (${line}) Tj`;
  })
  .join('\n');

const stream = `BT\n/F1 24 Tf\n50 780 Td\n(Léandre Ngadji) Tj\n${lines.replace(/^/gm, '0 -34 Td\n')}`;

const objects = Array(6).fill('');
objects[1] = '<< /Type /Catalog /Pages 2 0 R >>';
objects[2] = '<< /Type /Pages /Kids [3 0 R] /Count 1 >>';
objects[3] = '<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595 842] /Resources << /Font << /F1 4 0 R >> >> /Contents 5 0 R >>';
objects[4] = '<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>';
const contentStream = `BT\n/F1 24 Tf\n50 780 Td\n(Léandre Ngadji) Tj\n0 -34 Td\n/F1 12 Tf\n(Developpeur web et mobile junior) Tj\n0 -26 Td\n(Email : ngaleandre6@gmail.com) Tj\n0 -20 Td\n(Téléphone : +237 687510085) Tj\n0 -20 Td\n(Douala, Cameroun) Tj\nET`;
objects[5] = `<< /Length ${Buffer.byteLength(contentStream, 'latin1')} >>\nstream\n${contentStream}\nendstream`;

let pdf = '%PDF-1.4\n';
const offsets = [0];
for (let i = 1; i <= 5; i++) {
  offsets[i] = Buffer.byteLength(pdf, 'latin1');
  pdf += `${i} 0 obj\n${objects[i]}\nendobj\n`;
}
const xrefOffset = Buffer.byteLength(pdf, 'latin1');
pdf += `xref\n0 ${offsets.length}\n`;
pdf += '0000000000 65535 f \n';
for (let i = 1; i < offsets.length; i++) {
  pdf += `${String(offsets[i]).padStart(10, '0')} 00000 n \n`;
}
pdf += `trailer\n<< /Size ${offsets.length} /Root 1 0 R >>\nstartxref\n${xrefOffset}\n%%EOF\n`;

fs.writeFileSync(targetFile, Buffer.from(pdf, 'latin1'));
console.log(`CV PDF generated: ${targetFile}`);
console.log(`File size: ${fs.statSync(targetFile).size} bytes`);
