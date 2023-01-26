export default function Navbar() {
    return (
        <>
            <nav className="sticky top-0 font-sans flex dark:bg-zinc-900 flex-col text-center content-center sm:flex-row sm:text-left sm:justify-between py-2 px-6 bg-white shadow border-b border-zinc-800 sm:items-baseline w-full">
                <div className="mb-2 sm:mb-0 flex flex-row
">
                    <div className="h-16 w-16 self-center mr-2">
                        <a href="https://github.com/kkumar-gcc/cd">
                            <img className="h-16 w-16 self-center" alt="logo" src="https://camo.githubusercontent.com/064925451ed48a67d35733358202a27b5eb673e453afe24fda2fbe0d8f79ca00/68747470733a2f2f63646e2e646973636f72646170702e636f6d2f6174746163686d656e74732f313032303830373039393433393134303931342f313036313231373932303430303735363735362f636f646572732d646179626f6f6b2d726f73652e706e67" />
                        </a>
                    </div>
                </div>
                <div className="sm:mb-0 self-center">
                    <h5 className="text-lg text-gray-400 font-medium">
                        Welcome.md
                    </h5>
                </div>
            </nav>
        </>
    );
}