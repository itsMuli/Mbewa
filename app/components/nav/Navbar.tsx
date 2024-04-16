import Link from "next/link";
import Container from "../Container";
import Image from "next/image";


const NavBar = () => {
    return <div className="
    sticky
    top-0
    w-full
    bg-white-200
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
                        <div>CartCount</div>
                        <div>UserMenu</div>
                    </div>
                </div>
            </Container>
        </div>
    </div>;
}

export default NavBar;