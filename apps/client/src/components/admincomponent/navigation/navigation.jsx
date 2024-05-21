

import './styles.css'
import Link from "next/link"
export default function Navigation() {
  return (
    <div className='navigation'>
      <div className='admin_top'>
        <img className='admin_img' src="admin_profile.png" alt="" />
        <div>
          <h4>Admin</h4>
          <p>Admin page</p>
        </div>
      </div>

        <nav>
            <Link href='/admin'>Dashboard</Link>
            <Link href='/admin/products'>Edit Products</Link>
            <Link href={'/admin/catagory'}>Edit Catagory</Link>
            <Link href='/admin/users'>View Users</Link>
            <Link href='/admin/orders'>View orders</Link>
      </nav>   
</div>
 
  )
}

