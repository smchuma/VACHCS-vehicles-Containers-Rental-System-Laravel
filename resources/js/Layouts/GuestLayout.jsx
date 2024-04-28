import ApplicationLogo from "@/Components/ApplicationLogo";

export default function Guest({ children }) {
    return (
        <div className="min-h-screen relative flex items-center flex-col pt-6 sm:pt-0">
            <div className="w-full bg-slate-900 h-64 "></div>

            <div className=" absolute w-full flex items-center flex-col  overflow-hidden mt-28 ">
                <div className="flex items-center gap-2">
                    <img
                        src="/images/truck3.png"
                        className="h-10 logoimg"
                        alt="logoimg"
                    />
                    <ApplicationLogo className="logo text-3xl text-white text-center" />
                </div>

                <div className="flex justify-center bg-white shadow-md rounded-lg w-full flex-col sm:max-w-md  px-6 py-10 mt-8  ">
                    {children}
                </div>
            </div>
        </div>
    );
}
