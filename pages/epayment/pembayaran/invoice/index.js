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
                <div className=''>
                    pendi
                </div>
            </div>
        </div>
        <button onClick={handlePrint}>Print this out</button>
    </>
  )
}
