//import React from 'react'

function Footer() {
    return (
        <section className="mt-36 max-w-screen-xl mx-auto p-4 md:py-8">
            <hr class=" border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <div className="md:flex md:items-center md:justify-between">
            <span className="block text-sm text-gray-500 sm:text-center ">&copy; {new Date().getFullYear()} <a href="/" className="hover:underline">JELAJAH</a>. All Rights Reserved.</span>
                <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0">
                    <li>
                        <a href="#" className="hover:underline me-4 md:me-6">Email</a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline me-4 md:me-6">General</a>
                    </li>
                    <li>
                        <a href="/workshop" className="hover:underline me-4 md:me-6">Workshop</a>
                    </li>
                    {/* <li>
                        <a href="#" className="hover:underline">Travel</a>
                    </li> */}
                </ul>
            </div>
        </section>
    )
}

export default Footer