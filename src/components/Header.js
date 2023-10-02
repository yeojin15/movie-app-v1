import { Component } from '../core/core';

export default class Header extends Component {
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
            href: '#/movie?id=tt18687124',
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
        <img src="https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1598028330/noticon/vxemnmgycuqt416dsayz.png" alt="user" />
      </a>
    `;
  }
}
