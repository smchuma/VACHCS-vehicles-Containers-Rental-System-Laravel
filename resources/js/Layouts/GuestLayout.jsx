import ApplicationLogo from "@/Components/ApplicationLogo";

export default function Guest({ children }) {
    return (
        <div className="min-h-screen relative flex items-center flex-col pt-6 sm:pt-0 bg-white">
            <div className="w-full bg-[#2A7ABF] h-64 "></div>
            <div className=" absolute w-full sm:max-w-md mt-28 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
                <div className=" m-5 flex justify-center ">
                    <ApplicationLogo className="w-20 h-20 fill-current text-gray-500" />
                </div>
                {children}
            </div>
        </div>
    );
}
