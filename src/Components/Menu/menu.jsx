import React from 'react'
import './menu-styles.css'


import { ReactComponent as Tag } from "./../../assets/tag.svg";
import { ReactComponent as Person } from "./../../assets/person.svg";
import { ReactComponent as Box } from "./../../assets/outbox_FILL1_wght400_GRAD0_opsz48.svg";
import { ReactComponent as List } from "./../../assets/list.svg";
import { ReactComponent as Image } from "./../../assets/image-svgrepo-com.svg";
import { ReactComponent as Barchart } from "./../../assets/barchar.svg";
import { ReactComponent as Dashboard } from "./../../assets/dashboard_FILL1_wght400_GRAD0_opsz48.svg";
import { ReactComponent as Desc } from "./../../assets/description_FILL1_wght400_GRAD0_opsz48.svg";
import { ReactComponent as Setting } from "./../../assets/settings.svg";
import { ReactComponent as Logout } from "./../../assets/logout_FILL1_wght400_GRAD0_opsz48.svg";


function Menu() {
  return (
    <div className='menu'>
        <div className="menutitle"><span ><Image className='menutitleico' /></span>LAUNDRY</div>
        <div className="menuitem"><span ><Dashboard className='menuico' /></span>Dashboard</div>
        <div className='menuitem'><span><Tag className='menuico' /></span>Pos</div>
        <div className='menuitem'><span><Box className='menuico' /></span>Orders</div>
        <div className='menuitem'><span><List className='menuico' /></span>Order Status Screen</div>
        <div className='menuitem'><span><Desc className='menuico' /></span>Expense</div>
        <div className='menuitem'><span><Person className='menuico' /></span>Customer</div>
        <div className='menuitem'><span><Tag className='menuico' /></span>Services</div>
        <div className='menuitem'><span><Barchart className='menuico' /></span>Reports</div>
        <div className='menuitem'><span><Setting className='menuico' /></span>Tools</div>
        <div className='menuitem'><span><Logout className='menuico' /></span>Logout</div>
    </div>
  )
}

export default Menu