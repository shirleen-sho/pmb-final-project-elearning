import React,{useRef} from 'react'
import {useReactToPrint} from 'react-to-print'

export default function Invoice() {
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
        documentTitle: 'emp-data',
        onAfterPrint: () => alert ('Print success')
    })
  return (
    <>
        <div ref={componentRef} className='h-screen w-full'>
            <div>
                <div className='flex justify-around items-center'>
                    <div className='w-64 h-64 bg-primary-100 flex justify-end'>
                        <div className='flex justify-center '>
                            <div className='flex justify-end text-2xl '>Invoice</div>
                        </div>
                    </div>
                    <div>No Transaksi #AS1112 - Agustus 08, 2022</div>
                </div>
                <div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div>
                    <div></div>
                    <div></div>
                </div>
                <div></div>
                <div></div>
            </div>
        </div>
        <button onClick={handlePrint}>Print this out</button>
    </>
  )
}
