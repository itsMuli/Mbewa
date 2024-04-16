import Image from "next/image";

const HomeBanner = () => {
    return ( 
        <div className="relative bg-gradient-to-r
        from-yellow-500 to-yellow-700 mb-8">
        <div className="mx-auto px-8 py-12 flex
        flex-col gap-2 md:flex-row items-center
        justify-evenly">
            <div className="mb-8 md:mb-0 text-center">
                <h1 className="text-4xl md:text-6xl 
                font-bold text-white mb-4">Summer Sale!!</h1>
                <p className="text-lg md:text-xl text-white mb-2">Enjoy discounts on selected items</p>
                <p className="text-2xl md:text-5xl text-yellow-400 font-bold">GET 50% OFF</p>
            </div>
            <div className="w-1/2 h-full relative aspect-video">
                <div className="h-full">
                <Image 
                    src="/banner.jpg" 
                    layout="fill"
                    objectFit="cover"
                    fill alt="Banner Image" 
                    className="object-cover"/>
                </div>
            </div>
        </div>
        </div>
     );
}
 
export default HomeBanner;