import Link from "next/link";
import Container from "../Container";
import FooterList from "./FooterList";
import Image from "next/image";

const Footer = () => {
    return (
        <footer className="bg-gray-100 text-white-200 text-sm mt-16">
            <Container>
                <div className="flex flex-col md:flex-row justify-between pt-16 pb-8">
                    <FooterList>
                    <Image src="/mbewaicon.png" alt="Logo" width={120} height={40} />
                    </FooterList>
                    <FooterList>
                        <h1 className="text-base font-bold mb-1">Categories</h1> 
                        <Link href="#">Bomb Soaps</Link>
                        <Link href="#">Lipbalms</Link>
                        <Link href="#">Soaps</Link>
                    </FooterList>
                    <FooterList>
                        <h1 className="text-base font-bold mb-1">Account</h1> 
                        <Link href="#">About us</Link>
                        <Link href="#">Contact</Link>
                        <Link href="#">Returns & Refund Policy</Link>
                        <Link href="#">Shipping Policy</Link>
                        <Link href="#">Terms &Conditions</Link>
                    </FooterList>
                </div>
            </Container>
        </footer>
    );
}

export default Footer;
