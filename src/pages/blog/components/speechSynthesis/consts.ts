export enum PlayState {
  paused = 'paused',
  speaking = 'speaking',
  notRead = 'notRead',
}

export const specailCode = /\#|```(html|js).*```|!\[.*\]\(.*\)/gs
