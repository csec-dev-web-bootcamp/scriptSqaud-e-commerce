"use server";
import Footer from "@app/client/components/userComponents/footer";
import NavBar from "@app/client/components/userComponents/navbar";
import { getManyCategories } from "@app/client/data/catagory.data";
// import fetcher from "@app/client/data/fetcher";
import { getUser } from "@app/client/data/user.data";
// import { getSession } from "@app/client/session";

// const res = await fetcher.get('/users/me');
async function UserLayout({ children }) {
  const user = await getUser();
  const categories  = await getManyCategories()
  
  return (
    <div className="m-0 bg-[#fffbf5]">
      <NavBar session={user} categories={categories} />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
export default UserLayout;
