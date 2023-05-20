import {ReactNode} from "react";
import {Inter} from 'next/font/google'

import {MainContainer} from "@/components/common/MainContainer";
import './globals.css'


const inter = Inter({subsets: ['latin']})

export const metadata = {
    title: 'Region 23',
    description: 'Region 23',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: ReactNode
}) {
    return (
        <html lang="en" className={inter.className}>
        <body>{children}</body>
        </html>
    )
}
