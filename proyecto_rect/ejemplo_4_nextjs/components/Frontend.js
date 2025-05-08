import Head from "next/head"
import Footer from "./Footer"
import Header from "./Header"

const Frontend = ({children, title=''}) => {
  return (
    <>
        <Head>
           <title>{`Clasificados Next - ${title}`}</title> 
        </Head>
        <Header />
        {children}
        <Footer/>

    </>
  )
}

export default Frontend
