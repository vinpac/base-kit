import HomeView from './HomeView'

export default {
  pattern: '/',
  exactly: true,
  action: HomeView
}

export const tabs = {
  pattern: '/t/:tab',
  action: HomeView
}
