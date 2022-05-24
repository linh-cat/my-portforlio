import Header from "../layouts/Shared/Header";
import Footer from "./Shared/Footer";

const BaseLayout = ({ children }) => {
  return (
    <>
      <Header isFixed={true} />
      {children}
      <Footer />
    </>
  );
};
export default BaseLayout;
