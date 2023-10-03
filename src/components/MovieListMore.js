import { Component } from '../core/core';
import movieStore, { searchMovies } from '../store/movieStore';

export default class MovieListMore extends Component {
  constructor() {
    super({
      tagName: 'button',
    });
    movieStore.subscribe('pageMax', () => {
      const { page, pageMax } = movieStore.state;
      pageMax > page
        ? this.el.classList.remove('hide')
        : this.el.classList.add('hide');
    });
  }
  render() {
    this.el.classList.add('btn', 'view-more', 'hide');
    const { page, pageMax, searchText } = movieStore.state;

    if (searchText && pageMax > page) {
      this.el.classList.remove('hide');
    } else {
      this.el.classList.add('hide');
    }

    this.el.textContent = 'View more..';
    this.el.addEventListener('click', async () => {
      this.el.classList.add('hide');
      await searchMovies(movieStore.state.page + 1);
    });
  }
}
