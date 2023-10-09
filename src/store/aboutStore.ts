import { Store } from '../core/core';

interface State {
  avatar: string;
  name: string;
  email: string;
  blog: string;
  github: string;
  repo1: string;
}
export default new Store<State>({
  avatar: 'https://avatars.githubusercontent.com/u/115647373?v=4',
  name: 'YJK / Yeojin Kim',
  email: 'k.yeojin15@gmail.com',
  blog: 'https://yeojin.oopy.io',
  github: 'https://github.com/yeojin15',
  repo1: 'https://github.com/yeojin15/movie-app-v1',
});
