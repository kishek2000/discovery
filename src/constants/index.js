export function GetPageMeta(pageStates, currentPage, key) {
  return pageStates.filter(function (item) {
    return item["title"] === currentPage;
  })[0][key];
}
