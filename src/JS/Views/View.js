export default class View {
  _renderDefault(position) {
    const markup = this._generateMarkup();

    this._parentEl.insertAdjacentHTML(position, markup);
  }
  _clear() {
    this._parentEl.innerHTML = ``;
  }
}
