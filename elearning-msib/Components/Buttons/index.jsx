export default function Buttons({children, Variant}) {
  
  let style = "bg-[#FFDC39] px-12 py-2 rounded-full outline-0 cursor-pointer text-lg shadow-2xl m-5 transition-all "

  // if(Variant === 'Primary'){
  //   style ={
  //     ...style,
  //     backgroundColor: '#transparent',
  //     color : ''
  //   }
  // }
  // else if (Variant === 'Secondary'){
  //   style ={
  //     ...style,
  //     backgroundColor: '#transparent',
  //     color : ''
  //   }
  // }else if (Variant === 'Print'){
  //   style ={
  //     ...style,
  //     backgroundColor: '#transparent',
  //     color : ''
  //   }
  // }else if (Variant === 'Save   '){
  //   style ={
  //     ...style,
  //     backgroundColor: '#transparent',
  //     color : ''
  //   }
  // }

  return (
    <>
      <button className={style}>
        {children}
      </button>
    </>
  )
}
