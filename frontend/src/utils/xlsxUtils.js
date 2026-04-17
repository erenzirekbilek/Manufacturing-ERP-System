import * as XLSX from 'xlsx';

export function exportToExcel(data, filename = 'export.xlsx', sheetName = 'Sheet1') {
  const ws = XLSX.utils.json_to_sheet(data);
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, sheetName);
  XLSX.writeFile(wb, filename);
}

export function readExcelFile(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const data = new Uint8Array(e.target.result);
      const wb = XLSX.read(data, { type: 'array' });
      const sheetName = wb.SheetNames[0];
      const ws = wb.Sheets[sheetName];
      const json = XLSX.utils.sheet_to_json(ws);
      resolve(json);
    };
    reader.onerror = reject;
    reader.readAsArrayBuffer(file);
  });
}

export function createWorksheet(data) {
  return XLSX.utils.json_to_sheet(data);
}

export function workbookNew() {
  return XLSX.utils.book_new();
}

export function appendSheet(workbook, data, sheetName) {
  const ws = XLSX.utils.json_to_sheet(data);
  XLSX.utils.book_append_sheet(workbook, ws, sheetName);
}

export function writeFile(workbook, filename) {
  XLSX.writeFile(workbook, filename);
}

export default { exportToExcel, readExcelFile, createWorksheet, workbookNew, appendSheet, writeFile };