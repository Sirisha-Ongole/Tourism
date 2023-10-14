import React from "react";
import Link from "next/link";

export const defaultCardStyleClasses = {
  bg: "bg-white shadow-md",
  image: "mb-6 object-fill",
  textSection: "pl-4 pr-2 mb-4 ",
  title: "text-left text-2xl font-normal mb-8 ",
  text: "text-left text-lg font-thin mb-8",
  link: "underline",
};
export function Card({ data, styleClasses = defaultCardStyleClasses }) {
  return (
    <div className={styleClasses.bg}>
      <div className="overflow-hidden">
        <div className="relative h-0 pb-[60.8571%]">
          <img
            src={`/images/${data.image}`}
            alt={data.title}
            className={styleClasses.image}
          />
        </div>
      </div>
      <div className={styleClasses.textSection}>
        <p className={styleClasses.title}>{data.title}</p>
        <p className={styleClasses.text}>{data.text}</p>
        {data.link &&
          (data.link.href ? (
            <Link href={data.link.href} className={styleClasses.link}>
              {data.link.name}
            </Link>
          ) : (
            <p>{data.link.name}</p>
          ))}
      </div>
    </div>
  );
}
