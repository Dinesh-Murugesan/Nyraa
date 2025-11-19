import Link from "next/link";
import { SlSocialFacebook, SlSocialInstagram, SlSocialLinkedin, SlSocialTwitter } from "react-icons/sl";

export const Social = () =>
    <div className="flex justify-end p-4 bg-red-100">
        <div>
            <Link href="https://www.instagram.com">
                <SlSocialInstagram size={15} fill="#F875AA" className="mr-5" />
            </Link>
        </div>
        <div>
            <Link href="https://www.facebook.com">
                <SlSocialFacebook size={15} fill="#F875AA" className="mr-5" />
            </Link>
        </div>
        <div>
            <Link href="https://www.twitter.com">
                <SlSocialTwitter size={15} fill="#F875AA" className="mr-5" />
            </Link>
        </div>
        <div>
            <Link href="https://www.linkedin.com">
                <SlSocialLinkedin size={15} fill="#F875AA" className="mr-5" />
            </Link>
        </div>
    </div>
