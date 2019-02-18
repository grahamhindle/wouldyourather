import React from 'react'
import ReactDOM from 'react-dom'
import Root from './containers/Root'
import * as serviceWorker from './serviceWorker'
import { library } from '@fortawesome/fontawesome-svg-core'

// import your icons
import { faTachometer, faHome,faSignIn, faQuestionSquare,faTrophy,faInfoCircle} from '@fortawesome/pro-solid-svg-icons'

library.add(
  faTachometer,
  faSignIn,
  faQuestionSquare,
  faTrophy,
  faInfoCircle,
  faHome

)

ReactDOM.render(<Root />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
