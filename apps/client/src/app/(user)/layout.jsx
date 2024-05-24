import Footer from "@app/client/components/footer";
import NavBar from "@app/client/components/navbar";

function UserLayout({ children }) {
  return (
    <div className="m-0">
      <NavBar />
      <div>
      {children}
        </div>
      <Footer />
    </div>
  );
}
export default UserLayout;
