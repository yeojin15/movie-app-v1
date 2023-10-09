import { Component } from '../core/core';
import { SingleMovie } from '../store/movieStore';

interface Props {
  [key: string]: unknown;
  movie: SingleMovie;
}

export default class MovieItem extends Component {
  public props!: Props;
  constructor(props: Props) {
    super({ props, tagName: 'a' });
  }
  render() {
    const { movie } = this.props;

    this.el.setAttribute('href', `#/movie?id=${movie.imdbID}`);
    this.el.classList.add('movie');
    this.el.style.backgroundImage =
      movie.Poster !== 'N/A'
        ? `url(${movie.Poster})`
        : `url(https://www.shoshinsha-design.com/wp-content/uploads/2020/05/noimage.png)`;
    this.el.innerHTML = /** html */ `
      <div class="info">
        <div class="year">${movie.Year}</div>
        <div class="title">${movie.Title}</div>
      </div>
    `;
  }
}
