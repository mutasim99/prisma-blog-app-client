import Link from 'next/link'
import React from 'react'

export default function PracticeLayout({
    children,
    marketingSlots,
    salesSlots
}:
    {
        children: React.ReactNode;
        marketingSlots: React.ReactNode;
        salesSlots: React.ReactNode
    }) {
    return (
        <div>
            <nav className='flex gap-10 m-8'>
                <Link href='/development'>Development</Link>
                <Link href='/marketing'>Marketing</Link>
                <Link href='/marketing/settings'>Settings</Link>
                <Link href='/sales'>Sales</Link>
            </nav>

            <div className='flex gap-20'>
                {marketingSlots}
                {salesSlots}
            </div>
            {children}
        </div>
    )
}
