import Link from "next/link";
import Container from "../Container";
import Image from "next/image";
import { MdFacebook, MdPhone } from "react-icons/md";
import { AiFillInstagram } from "react-icons/ai";
import { FaTiktok } from "react-icons/fa";


const NavBar = () => {
    return <div className="
    sticky
    top-0
    w-full
    bg-white
    z-30
    shadow-sm
    ">
        <div className="py-4 border-b-[1px]">
            <Container>
                <div className="flex
                                items-center
                                justify-between
                                gap-3
                                md:gap-0">
                    <Link href="/">
                        <Image src="/mbewa.png" alt="Logo" width={120} height={40} />
                    </Link>
                    <div className="hidden md:block">Search</div>
                    <div className="flex
                                    items-center
                                    gap-8
                                    md:gap-12">
                        <div className="flex flex-col md:flex-row gap-10 md:gap-0 hidden md:flex">
                            <MdPhone color="green" size={30} style={{marginRight: '5px'}}/>
                            <span style={{fontSize: '16px'}}><strong>+254 705 878736</strong>
                            <small>Mon-Fri:8:00-7:00</small>
                            </span>
                        </div>
                        <div className="hidden md:flex gap-3">
                            <Link href="#"><MdFacebook size={24}/> </Link>
                            <Link href="#"><AiFillInstagram size={24}/> </Link>
                            <Link href="#"><FaTiktok size={24}/></Link>
                        </div>
                        <div>CartCount</div>
                        <div>UserMenu</div>
                    </div>
                </div>
            </Container>
        </div>
    </div>;
}

export default NavBar;