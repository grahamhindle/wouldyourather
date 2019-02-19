import React from 'react'
import ReactDOM from 'react-dom'
import Root from './containers/Root'
import * as serviceWorker from './serviceWorker'
import { library } from '@fortawesome/fontawesome-svg-core'


import { faTachometerAlt, faHome,faSignInAlt,faQuestionCircle,faTrophy,faInfoCircle} from '@fortawesome/free-solid-svg-icons'

library.add(
  faTachometerAlt,
  faSignInAlt,
  faQuestionCircle,
  faTrophy,
  faInfoCircle,
  faHome
)

ReactDOM.render(<Root />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
