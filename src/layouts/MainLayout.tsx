import { useEffect } from 'react'
import { useLocation, useOutlet } from 'react-router-dom'
import { AnimatePresence, motion } from 'motion/react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

function MainLayout() {
  const location = useLocation()
  const element = useOutlet()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <>
      <NavBar />
      <main>
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            {element}
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
    </>
  )
}

export default MainLayout
