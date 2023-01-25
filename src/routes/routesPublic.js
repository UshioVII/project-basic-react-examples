import { Error404 } from '../components/Error404'
import { Home } from '../components/Home'
import { ProgressBar } from '../components/ProgressBar'
import { ShowHideMessage } from '../components/ShowHideMessage'
import { StopwatchTimer } from '../components/StopwatchTimer'
import { StopwatchTimerFakePractice } from '../components/Practice/StopwatchTimerFakePractice'

export const routesPublic =  [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/showHideMessage",
      element: <ShowHideMessage />,
    },
    {
    path: "/progressBar",
    element: <ProgressBar />,
    },
    {
      path: "/stopwatchTimer",
      element: <StopwatchTimer />,
    },
    {
      path: "/practice/stopwatchTimerFakePractice",
      element: <StopwatchTimerFakePractice />,
    },
    {
      path: "/*",
      element: <Error404 />,
    }
  ]