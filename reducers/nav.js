import AppNavigator from '../components/AppNavigator'

const initialState = AppNavigator.router.getStateForAction(AppNavigator.router.getActionForPathAndParams('PhotosList'))

export default function navReducer(state = initialState, action) {
  const nextState = AppNavigator.router.getStateForAction(action, state)
  return nextState || state
}
