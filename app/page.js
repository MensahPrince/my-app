import Button from "../components/button"
import Image from "next/image"
import jamal from "../public/jamal.jpg"


export default function HomePage() {
    return (
        < div className="container">                
            <h1>Hello, NextJS!!</h1>
            <Button>World</Button>
            <Image src={jamal} 
                alt="a picture of jamal"
                width={200}
                height={200} 
                placeholder="blur"/>
        </div>
    )
}