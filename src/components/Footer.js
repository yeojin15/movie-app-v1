import { Component } from '../core/core';
import aboutStore from '../store/aboutStore';

export default class Footer extends Component {
  constructor() {
    super({
      tagName: 'footer',
    });
  }
  render() {
    const { github, repo1 } = aboutStore.state;
    this.el.innerHTML = /** html */ `
      <div>
        <a href="${repo1}" target="_blank">Github Repository</a>
      </div>
      <div>
        <a href="${github}" target="_blank">${new Date().getFullYear()} YJK</a>
      </div>
    `;
  }
}
