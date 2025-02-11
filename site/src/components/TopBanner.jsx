import React from 'react'
import TopHeader from './TopHeader'
import Link from 'next/link'
import SIteNavbar from './SIteNavbar'
import NavMobile from './NavMobile';
import NavHomeLink from './NavHomeLink';


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
            <section className='fixed top-0 left-0 w-full bg-black text-white shadow-brandShadow border-b-2 border-b-gray-200 z-50'>
                <div className="container flex items-center justify-between py-2">
                    <div className="logo">
                        <Link href={"/"}>
                            <img className='object-fill h-5 w-16 sm:h-6 sm:w-20 lg:h-7 lg:w-24 xl:w-40 xl:h-10' src="/assets/images/logo.png" alt="Logo" />
                        </Link>
                    </div>
                    <nav className="flex items-center justify-center flex-1">
                        <ul className='flex items-center justify-center gap-4 lg:gap-6 xl:gap-8'>
                            <NavHomeLink/>
                            {
                                navItems?.length !== 0 && navItems?.map(item =>
                                    <SIteNavbar key={item.id} item={item} />
                                )
                            }
                        </ul>
                    </nav>
                    <div className="top-header">
                        <TopHeader />
                    </div>
                </div>
            </section>
            <div className='mt-16'>
                {/* This div represents the rest of your page content */}
                {/* Adjust the margin-top value to match the height of your TopBanner */}
                {/* ... existing body content ... */}
            </div>
        </>
    )
}

export default TopBanner