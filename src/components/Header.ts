import { Component } from '../core/core';
import aboutStore from '../store/aboutStore';

interface State {
  [key: string]: unknown;
  menus: { name: string; href: string }[];
}

export default class Header extends Component {
  // state에 값이 할당되어있다고 단언
  public state!: State;
  constructor() {
    super({
      tagName: 'header',
      state: {
        menus: [
          {
            name: 'Search',
            href: '#/',
          },
          {
            name: 'Movie',
            href: '#/movie?id=tt1605783',
          },
          {
            name: 'About',
            href: '#/about',
          },
        ],
      },
    });

    //popstate -> page 바뀔때마다 동작
    window.addEventListener('popstate', () => {
      this.render();
    });
  }

  render() {
    const { avatar } = aboutStore.state;
    this.el.innerHTML = /** html */ `
      <a href="#/" class="logo"><span>OMDbAPI</span>.COM</a>
      <nav>
        <ul>
          ${this.state.menus
            .map((menu) => {
              const href = menu.href.split('?')[0];
              const hash = location.hash.split('?')[0];
              const isActive = href === hash;
              return /** html */ `
              <li>
                <a href="${menu.href}" 
                class="${isActive ? 'active' : ''}">${menu.name}</a>
              </li>
            `;
            })
            .join('')}
        </ul>
      </nav>
      <a href="#/about" class="user">
        <img src="${avatar}" alt="avatar" />
      </a>
    `;
  }
}
