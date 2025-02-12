import React from 'react'
import TopHeader from './TopHeader'
import SIteNavbar from './SIteNavbar'
import NavHomeLink from './NavHomeLink';
import Toolbar from './Toolbar';


async function getData() {
    try {
        const res = await fetch(`${process.env.BASE_URL}/api/category/categories`);
        const data = await res.json()
        if (!data.success) {
           console.log("Navlist Fetch failed!")
        }
        return data.categories

    } catch (error) {
       console.log("Navlist Fetch failed!")
    }
}


const TopBanner = async () => {
    const navItems = await getData();
    return (
        <>
            <div className='mt-12'>
                <nav className="flex items-center justify-center flex-1">
                    <ul className='flex items-center justify-center gap-4 lg:gap-6 xl:gap-8'>
                        <NavHomeLink />
                        {navItems?.length !== 0 && navItems?.map(item =>
                            <SIteNavbar key={item.id} item={item} />
                        )}
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default TopBanner