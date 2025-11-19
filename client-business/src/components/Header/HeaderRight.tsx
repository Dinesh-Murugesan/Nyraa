import Link from "next/link";
import { FaRegUser, FaSearch, FaOpencart } from "react-icons/fa";

export const HeaderRight = () =>
    <div className="flex w-full justify-end items-center">
        <div className="flex items-center mr-10" >
            <Link href="/">
                <FaRegUser style={{height: "20px", width: "20px"}} fill="#F875AA"/>
            </Link>
        </div>
        <div className="flex items-center mr-10" >
            <Link href="/">
                <FaSearch style={{height: "20px", width: "20px"}} fill="#F875AA"/>
            </Link>
        </div>
        <div className="flex items-center mr-10" >
            <Link href="/">
                <FaOpencart style={{height: "20px", width: "20px"}} fill="#F875AA"/>
            </Link>
        </div>
    </div>
