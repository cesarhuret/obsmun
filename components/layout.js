import Script from 'next/script'
import Footer from './footer'
import Menu from './navbar'

export default function Layout({ children }) {
  return (
    <>
      {/* <Script src="//code.tidio.co/t5phuxngbjnmrsbmlpzdj7borkeguz2d.js"></Script> */}
      {/* <Menu/> */}
      {children}
    </>
  )
}