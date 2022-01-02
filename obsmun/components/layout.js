import Footer from './footer'
import Menu from './navbar'

export default function Layout({ children }) {
  return (
    <>
      <Menu/>
      <main>{children}</main>
      <Footer />
    </>
  )
}