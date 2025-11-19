import Link from "next/link";
import { SlSocialFacebook, SlSocialInstagram, SlSocialLinkedin, SlSocialTwitter } from "react-icons/sl";

export const Social = () =>
    <div className="flex justify-end p-4 bg-red-100">
        <div className="mr-5">
            <Link href="https://www.instagram.com">
                <SlSocialInstagram size={15} fill="#F875AA" />
            </Link>
        </div>
        <div className="mr-5">
            <Link href="https://www.facebook.com">
                <SlSocialFacebook size={15} fill="#F875AA" />
            </Link>
        </div>
        <div className="mr-5">
            <Link href="https://www.twitter.com">
                <SlSocialTwitter size={15} fill="#F875AA"  />
            </Link>
        </div>
        <div className="mr-5">
            <Link href="https://www.linkedin.com">
                <SlSocialLinkedin size={15} fill="#F875AA" />
            </Link>
        </div>
    </div>
