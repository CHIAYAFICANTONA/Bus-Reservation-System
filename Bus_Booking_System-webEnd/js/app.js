async function includeHTML(elementId, file) {
  const response = await fetch(file);
  const htmlContent = await response.text();
  document.getElementById(elementId).innerHTML = htmlContent;
}

includeHTML('samuel','/pages/samuel_page.html');
includeHTML('cantona','/pages/cantona_page.html');
includeHTML('marcus','/pages/marcus_page.html');
includeHTML('james','/pages/james_page.html');
