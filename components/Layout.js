import Head from 'next/head'
import Header from './header'
import Footer from './footer'


const Layout = ({ children }) => {
  return (
    <>
    <section className="content">
      <Head>
        <title>Strona - Marek Golonka</title>
        <meta name="description" content="Strona stworzona w next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header></Header>
      {children}
    </section>
      <Footer></Footer>
  </>
  )
}

export default Layout