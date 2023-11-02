
"use client";
import { Menu } from '@headlessui/react';
import { BiSolidShare, BiLogoFacebookSquare, BiLogoTwitter, BiLogoPinterest, BiDownload} from 'react-icons/bi';

export const ShareDropDown = (currentImg) => {
    return (
    <>
                    <Menu>
                    <Menu.Button className="relative"><BiSolidShare size={20}/></Menu.Button>
                        <Menu.Items className="bg-white absolute text-black right-2 p-4 text-left z-10">
                            <div className="flex flex-col">
                            {socailMediaContent.map((item, index) => (
                                <a  key={index} className="flex flex-row" href={item.link}>
                                {item.icon}
                                {item.name}
                                </a>
                            ))}
                            </div>
                          </Menu.Items>
                        </Menu>
    </>
    )
    };

    const socailMediaContent = [
        {
        link: "https://www.facebook.com/sharer.php?u=https://www.nagaraholetigerreserve.com/wp-content/uploads/2021/01/DSC2472.jpg",
        name: "Share on Facebook",
        icon: <BiLogoFacebookSquare size={15} className="mx-2"/>,
        },
        { 
        link: "https://twitter.com/i/flow/login?redirect_after_login=https://www.nagaraholetigerreserve.com/wp-content/uploads/2021/01/DSC2472.jpg",
        name: "Share on Twitter",
        icon: <BiLogoTwitter size={15} className="mx-2"/>,
        },
        {
        link: "https://www.pinterest.com/pin/create/button/?url=&media=https://www.nagaraholetigerreserve.com/wp-content/uploads/2021/01/DSC2472.jpg",
        name: "Pin it",
        icon: <BiLogoPinterest size={15} className="mx-2"/>,
        },
        {
        link: "https://www.nagaraholetigerreserve.com/wp-content/uploads/2021/01/DSC2472.jpg",
        name: "Download image",
        icon: <BiDownload size={15} className="mx-2"/>,
        }
    ]