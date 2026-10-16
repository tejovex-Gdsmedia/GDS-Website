// Deploy this inside the target Google Sheet's Apps Script editor
// (Extensions -> Apps Script), bound to:
// https://docs.google.com/spreadsheets/d/1-HhZDohBhUxX2DTRhvpDF1G2I5mVEoqS-tYL7jyc9ng
//
// Deploy > New deployment > type "Web app" > execute as "Me",
// access "Anyone" > Deploy, then copy the Web app URL into
// GOOGLE_SHEET_WEBHOOK_URL in .env.local (and in your hosting provider's
// environment variables for production).

function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Leads")
    || SpreadsheetApp.getActiveSpreadsheet().insertSheet("Leads");

  if (sheet.getLastRow() === 0) {
    sheet.appendRow(["Submitted At", "Name", "Phone", "Email", "Message"]);
  }

  var data = JSON.parse(e.postData.contents);

  sheet.appendRow([
    data.submittedAt || new Date().toISOString(),
    data.name || "",
    data.phone || "",
    data.email || "",
    data.message || "",
  ]);

  return ContentService
    .createTextOutput(JSON.stringify({ success: true }))
    .setMimeType(ContentService.MimeType.JSON);
}
