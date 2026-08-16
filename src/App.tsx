import { RouterProvider } from 'react-router-dom'
import { MotionConfig } from 'motion/react'
import { router } from './routes/router'

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <RouterProvider router={router} />
    </MotionConfig>
  )
}

export default App
