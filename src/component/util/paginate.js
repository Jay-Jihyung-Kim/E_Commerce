import _ from "lodash";

export function paginate(products, currentpage, pages) {
  const startIndex = (currentpage - 1) * pages;

  return _(products).slice(startIndex).take(pages).value();
}
