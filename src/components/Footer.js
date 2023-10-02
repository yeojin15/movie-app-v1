import { Component } from '../core/core';

export default class Footer extends Component {
  constructor() {
    super({
      tagName: 'footer',
    });
  }
  render() {
    this.el.innerHTML = /** html */ `
      <div>
        <a href="https://github.com/yeojin15/movie-app"></a>
      </div>
      <div></div>
    `;
  }
}
