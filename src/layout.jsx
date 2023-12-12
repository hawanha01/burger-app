import MyNavbar from "./components/navbar";

const Layout = ({ children }) => {
  return (
    <>
      <MyNavbar />
      {children}
    </>
  );
};

export default Layout;
