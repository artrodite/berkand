import React from "react";

export default function References() {
    const createReferences = () => {
        let obj = []

        for (let i=1; i<18; i++) {
            obj.push(<div className="" key={i}>
                <img
                    className="w-28 h-28"
                    src={'/assets/brands/' + i + '.png'}
                    alt=""
                />
            </div>)

        }
        return obj
    }
    return (
        <section className="px-60 py-44">
            <div className="flex">
                <span className="font-normal text-2xl">Referanslarımız</span>
                <img className="ml-2" src="/assets/icons/union.svg" alt=""/>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4">
                {createReferences()}


            </div>
            {/*<div className="flex flex-col mt-20">*/}
            {/*  <div className="flex justify-between">*/}
            {/*    <div className="w-28 h-28 flex justify-center items-center mb-32">*/}
            {/*      <img*/}
            {/*        className="object-contain"*/}
            {/*        src="/assets/brands/1.png"*/}
            {/*        alt=""*/}
            {/*      />*/}
            {/*    </div>*/}
            {/*    <div className="w-28 h-28 object-cover flex justify-center mb-32">*/}
            {/*      <img*/}
            {/*        className="object-contain"*/}
            {/*        src="/assets/brands/2.png"*/}
            {/*        alt=""*/}
            {/*      />*/}
            {/*    </div>*/}
            {/*    <div className="w-28 h-28 object-cover flex justify-center mb-32">*/}
            {/*      <img*/}
            {/*        className="object-contain"*/}
            {/*        src="/assets/brands/3.png"*/}
            {/*        alt=""*/}
            {/*      />*/}
            {/*    </div>*/}
            {/*    <div className="w-28 h-28 object-cover flex justify-center mb-32">*/}
            {/*      <img*/}
            {/*        className="object-contain"*/}
            {/*        src="/assets/brands/4.png"*/}
            {/*        alt=""*/}
            {/*      />*/}
            {/*    </div>*/}
            {/*    <div className="w-28 h-28 object-cover flex justify-center mb-32">*/}
            {/*      <img*/}
            {/*        className="object-contain"*/}
            {/*        src="/assets/brands/5.png"*/}
            {/*        alt=""*/}
            {/*      />*/}
            {/*    </div>*/}
            {/*  </div>*/}
            {/*  <div className="flex justify-between">*/}
            {/*    <div className="w-28 h-28 flex justify-center items-center mb-32">*/}
            {/*      <img*/}
            {/*        className="object-contain"*/}
            {/*        src="/assets/brands/6.png"*/}
            {/*        alt=""*/}
            {/*      />*/}
            {/*    </div>*/}
            {/*    <div className="w-28 h-28 object-cover flex justify-center mb-32">*/}
            {/*      <img*/}
            {/*        className="object-contain"*/}
            {/*        src="/assets/brands/7.png"*/}
            {/*        alt=""*/}
            {/*      />*/}
            {/*    </div>*/}
            {/*    <div className="w-28 h-28 object-cover flex justify-center mb-32">*/}
            {/*      <img*/}
            {/*        className="object-contain"*/}
            {/*        src="/assets/brands/8.png"*/}
            {/*        alt=""*/}
            {/*      />*/}
            {/*    </div>*/}

            {/*    <div className="w-28 h-28 object-cover flex justify-center mb-32">*/}
            {/*      <img*/}
            {/*        className="object-contain"*/}
            {/*        src="/assets/brands/10.png"*/}
            {/*        alt=""*/}
            {/*      />*/}
            {/*    </div>*/}
            {/*  </div>*/}
            {/*  <div className="flex justify-between">*/}
            {/*    <div className="w-28 h-28 flex justify-center items-center mb-32">*/}
            {/*      <img*/}
            {/*        className="object-contain"*/}
            {/*        src="/assets/brands/11.png"*/}
            {/*        alt=""*/}
            {/*      />*/}
            {/*    </div>*/}
            {/*    <div className="w-28 h-28 object-cover flex justify-center mb-32">*/}
            {/*      <img*/}
            {/*        className="object-contain"*/}
            {/*        src="/assets/brands/12.png"*/}
            {/*        alt=""*/}
            {/*      />*/}
            {/*    </div>*/}
            {/*    <div className="w-28 h-28 object-cover flex justify-center mb-32">*/}
            {/*      <img*/}
            {/*        className="object-contain"*/}
            {/*        src="/assets/brands/13.png"*/}
            {/*        alt=""*/}
            {/*      />*/}
            {/*    </div>*/}
            {/*    <div className="w-28 h-28 object-cover flex justify-center mb-32">*/}
            {/*      <img*/}
            {/*        className="object-contain"*/}
            {/*        src="/assets/brands/14.png"*/}
            {/*        alt=""*/}
            {/*      />*/}
            {/*    </div>*/}
            {/*    <div className="w-28 h-28 object-cover flex justify-center mb-32">*/}
            {/*      <img*/}
            {/*        className="object-contain"*/}
            {/*        src="/assets/brands/15.png"*/}
            {/*        alt=""*/}
            {/*      />*/}
            {/*    </div>*/}
            {/*  </div>*/}
            {/*  <div className="flex">*/}
            {/*    <div className="w-28 h-28 object-cover flex justify-center mr-[216px]">*/}
            {/*      <img*/}
            {/*        className="object-contain"*/}
            {/*        src="/assets/brands/16.png"*/}
            {/*        alt=""*/}
            {/*      />*/}
            {/*    </div>*/}
            {/*    <div className="w-28 h-28 object-cover flex justify-center mr-">*/}
            {/*      <img*/}
            {/*        className="object-contain"*/}
            {/*        src="/assets/brands/17.png"*/}
            {/*        alt=""*/}
            {/*      />*/}
            {/*    </div>*/}
            {/*  </div>*/}
            {/*</div>*/}
        </section>
    );
}
