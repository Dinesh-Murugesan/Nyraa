import Image from "next/image";
import { HeaderRight } from "./HeaderRight";
import Link from "next/link";

export const Header = () =>
    <div className="flex bg-red-50 h-30 items-center">
        <div className="flex justify-start size-24">
            <Link href="/">
                <Image
                    className="border-1 bg-red-50"
                    src="/logo.svg"
                    alt="Nyraa botique logo"
                    width={100}
                    height={100}
                    priority
                />
            </Link>
        </div>
        <HeaderRight />
    </div>
