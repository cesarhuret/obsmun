import Footer from './footer'
import Menu from './navbar'

export default function Layout({ children }) {
  return (
    <>
      <script src="//code.tidio.co/t5phuxngbjnmrsbmlpzdj7borkeguz2d.js"></script>
      <Menu/>
      <main>{children}</main>
      <Footer />
    </>
  )
}