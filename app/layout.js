import { Roboto } from "next/font/google"

const roboto = Roboto({
    weight: '400',
    subsets: ["latin"],
})


export default function RootLayout({ children }) {
    return(
        <html lang="en"  className={roboto.className}>
            <body>
                <header><h1>This is a header </h1></header>
                <main>{children}</main>
                <footer>This is a Footer</footer>
            </body>
            
        </html>
    )
}