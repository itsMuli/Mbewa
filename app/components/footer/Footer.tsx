import Link from "next/link";
import Container from "../Container";
import FooterList from "./FooterList";
import Image from "next/image";
import { MdFacebook } from "react-icons/md";
import { AiFillInstagram } from "react-icons/ai";
import { FaTiktok } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-gray-100 text-white-200 text-sm mt-16">
            <Container>
                <div className="flex flex-col md:flex-row justify-between pt-16 pb-8">
                    <FooterList>
                    <Image src="/mbewaicon.png" alt="Logo" width={240} height={80} />
                    </FooterList>
                    <FooterList>
                        <h3 className="text-base font-bold mb-1">Categories</h3> 
                        <Link href="#">Bomb Soaps</Link>
                        <Link href="#">Lipbalms</Link>
                        <Link href="#">Soaps</Link>
                    </FooterList>
                    <FooterList>
                        <h3 className="text-base font-bold mb-1">Account</h3> 
                        <Link href="#">About us</Link>
                        <Link href="#">Contact</Link>
                        <Link href="#">Returns & Refund Policy</Link>
                        <Link href="#">Shipping Policy</Link>
                        <Link href="#">Terms &Conditions</Link>
                    </FooterList>
                    <FooterList>
                        <h3 className="text-base font-bold mb-1">Follow Us</h3>
                        <div className="flex gap-3">
                            <Link href="#"><MdFacebook size={24}/> </Link>
                            <Link href="#"><AiFillInstagram size={24}/> </Link>
                            <Link href="#"><FaTiktok size={24}/></Link>
                        </div>
                    </FooterList>
                </div>
            </Container>
        </footer>
    );
}

export default Footer;
