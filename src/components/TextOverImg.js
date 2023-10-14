"use client";
import React from "react";

export const TextOverImg = ({ data ,gridPosition }) => { 
    const left = gridPosition === "left" ? 4 : 1;
    const right = gridPosition === "right" ? 1 : 4;  
return(
    <>{data && (
    <div className="w-3/4 h-auto mx-auto py-10">
    <img className="object-cover" src={`/images/${data.img}`} alt={data.alt}/>
    <div className='grid grid-cols-12 mt-2 lg:-mt-24 w-full tracking-wide'>
        <div className={`bg-transparent lg:col-span-${right}`}></div>
        <div className='bg-white col-span-12 lg:col-span-7 w-full lg:py-10 lg:px-16 py-3 px-2 grid gap-4'>
            <div className='font-semibold text-2xl text-base'>{data.heading}</div>
            <div className='font-base text-base'>{data.body}</div>
            <div className='font-semibold'>{data.ending}</div>
        </div>
        <div className={`bg-transparent lg:col-span-${left}`}></div>
    </div>
    </div>)}</>)
}