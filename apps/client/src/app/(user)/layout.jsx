import Footer from "@app/client/components/footer";
import NavBar from "@app/client/components/navbar";
import { getSession } from "@app/client/session";

async function UserLayout({ children }) {
  const session = await getSession()

  return (
    <div className="m-0">
      <NavBar session={session}/>
      <main>
      {children}
        </main>
      <Footer />
    </div>
  );
}
export default UserLayout;
