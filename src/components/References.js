import React from "react";

export default function References() {
    const createReferences = () => {
        let obj = []

        for (let i=1; i<18; i++) {
            obj.push(<div className="" key={i}>
                <img
                    className="w-28 h-28 object-contain"
                    src={'/assets/brands/' + i + '.png'}
                    alt=""
                />
            </div>)

        }
        return obj
    }
    return (
        <section className="px-0 md:py-44 py-16 container md:mx-auto mx-7 w-auto">
            <div className="flex mb-16">
                <span className="font-normal text-2xl">Referanslarımız</span>
                <img className="ml-2" src="/assets/icons/union.svg" alt=""/>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-5 gap-20">
                {createReferences()}
            </div>
        </section>
    );
}
