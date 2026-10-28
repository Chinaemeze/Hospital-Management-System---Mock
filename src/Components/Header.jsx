import { memo } from "react";
import FilterPanel from "./HeaderComponents/FilterPanel";
import SearchBar from "./HeaderComponents/SearchBar";

const Header = memo(function () {
    return (
        <header className="border-b border-teal-800 bg-teal-950 text-white shadow-sm">
            <div className="mx-auto flex w-full max-w-7xl flex-col gap-5 px-4 py-5 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
                <div className="flex items-center gap-3">
                    <div className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-teal-400 text-xl font-black text-teal-950 shadow-inner">+</div>
                    <div>
                        <p className="text-xs font-bold uppercase tracking-[0.2em] text-teal-300">Care coordination</p>
                        <h1 className="mt-0.5 text-xl font-bold tracking-tight text-white sm:text-2xl">Hospital dashboard</h1>
                    </div>
                </div>
                <div className="flex flex-col gap-4 lg:items-end">
                    <SearchBar />
                    <FilterPanel />
                </div>
            </div>
        </header>
    )
})

export default Header;