// ═══════════════════════════════════════════════════════════════
// TACCSi — Google Apps Script
// ───────────────────────────────────────────────────────────────
const SHEET_NAME = 'TACCSi_Dados';

// Colunas de metadados (ordem fixa)
const META_COLS = [
  'timestamp', 'data', 'terapeuta', 'crianca', 'dob',
  'idade_meses', 'sexo', 'escola', 'tarefas',
  'score_2A', 'score_2B', 'score_2C', 'score_total', 'score_max',
  'csc', 'grupo_norm', 'duracao_min', 'observacoes'
];

// ── Receber dados (POST) ──────────────────────────────────────
function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const ss    = SpreadsheetApp.getActiveSpreadsheet();
    let sheet   = ss.getSheetByName(SHEET_NAME);

    // Criar folha se não existir
    if (!sheet) {
      sheet = ss.insertSheet(SHEET_NAME);
    }

    // Construir cabeçalhos se a folha estiver vazia
    if (sheet.getLastRow() === 0) {
      const itemKeys = Object.keys(data).filter(k => !META_COLS.includes(k));
      itemKeys.sort();
      const headers = [...META_COLS, ...itemKeys];
      sheet.appendRow(headers);
      // Formatar cabeçalhos
      const headerRange = sheet.getRange(1, 1, 1, headers.length);
      headerRange.setFontWeight('bold');
      headerRange.setBackground('#1a2e4a');
      headerRange.setFontColor('#ffffff');
      sheet.setFrozenRows(1);
    }

    // Obter cabeçalhos existentes
    const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];

    // Construir linha na ordem dos cabeçalhos
    const row = headers.map(h => {
      const val = data[h];
      return val !== undefined && val !== null ? val : '';
    });

    // Adicionar linha de dados
    sheet.appendRow(row);

    // Formatar alternadamente as linhas para facilitar leitura
    const lastRow = sheet.getLastRow();
    if (lastRow % 2 === 0) {
      sheet.getRange(lastRow, 1, 1, headers.length).setBackground('#f0f4f8');
    }

    return ContentService
      .createTextOutput(JSON.stringify({ status: 'ok', row: lastRow }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'error', message: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// ── Permitir GET (para testar se o script está ativo) ─────────
function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({
      status: 'ok',
      message: 'TACCSi Apps Script está ativo ✅',
      sheet: SHEET_NAME
    }))
    .setMimeType(ContentService.MimeType.JSON);
}
