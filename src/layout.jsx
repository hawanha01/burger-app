import MyNavbar from "./components/navbar/navbar"

const Layout = ({ children }) => {
  return(
    <>
      <MyNavbar/>
      {children}
    </>
  )
}

export default Layout