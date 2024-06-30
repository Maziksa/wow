export const createElementWithCloneHtmlElement = (id: string, content: string) => {
  const elem = document.getElementById(id);

  if (!elem) return;
  const clone = elem.cloneNode(true);

  if (content) {
    clone.textContent = content;
  }

  return clone;
}
