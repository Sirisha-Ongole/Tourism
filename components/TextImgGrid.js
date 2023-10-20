"use client";
import React from "react";

export const TextImgGrid = ({ data ,ImagePosition }) => {  
return(
    <>{data && (
    <div className="grid grid-cols-12">
    {ImagePosition === "right" ? <ImgGrid data={data} /> :  <TextGrid data={data}/>}
    {ImagePosition === "right" ?  <TextGrid data={data}/> :  <ImgGrid  data={data}/>}
    </div>)}</>)
}

const ImgGrid = ({data}) => {
    return (
        <>
         <div className="col-span-6">
        {data && <img className="object-cover" src={`/images/${data.img}`} alt={data.alt}/>}
        </div>
        </>
    )
}

const TextGrid = ({data}) => {
    return (<><div className="grid col-span-6 p-10 mx-10 gap-2">{data && (<>
                <div className="text-2xl">{data.heading}</div>
                <p className="font-base text-lg">{data.p1}</p>
                <p className="font-base text-lg">{data.p2}</p></>
                )}</div></>)}