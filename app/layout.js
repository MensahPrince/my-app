import { Roboto } from "next/font/google"
import "../styles/global.css"

const roboto = Roboto({
    weight: '400',
    subsets: ["latin"],
})


export default function RootLayout({ children }) {
    return(
        <html lang="en"  className={roboto.className}>
            <body>
                <header className="container"><h1>This is a header </h1></header>
                <main>{children}</main>
                <footer className="container">This is a Footer</footer>
            </body>
            
        </html>
    )
}