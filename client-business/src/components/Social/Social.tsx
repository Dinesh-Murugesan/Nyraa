import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

export const Social = () =>
    <div className="flex justify-end p-4 bg-red-100">
        <div className="mr-5">
            <Link href="https://www.instagram.com" target="#">
                <FaInstagram size={15} fill="#F875AA" />
            </Link>
        </div>
        <div className="mr-5">
            <Link href="https://www.facebook.com" target="#">
                <FaFacebook size={15} fill="#F875AA" />
            </Link>
        </div>
        <div className="mr-5">
            <Link href="https://www.twitter.com" target="#">
                <FaTwitter size={15} fill="#F875AA"  />
            </Link>
        </div>
        <div className="mr-5">
            <Link href="https://www.linkedin.com" target="#">
                <FaLinkedin size={15} fill="#F875AA" />
            </Link>
        </div>
    </div>
