interface ModalProps {
  open: boolean; 
  onClose: () => void;
  children: React.ReactNode;
}

export function Modal({open, onClose, children}: ModalProps){
  return (
    <>
      {/* Backdrop */}
      <div onClick={onClose} className={`fixed inset-0 flex justify-center items-center transition-colors ${open? "visible bg-black/20": "invisible"}`}>
        <div role="dialog" onClick={e => e.stopPropagation()} className={`bg-white w-full max-w-[500px] mx-auto relative rounded-lg p-6 transition-all ${open? "scale-100 opacity-100": "scale-125 opacity-0"}`}>
          <button id="btn-dialog-close" onClick={()=> onclose} type="button" className="absolute top-8 right-4 w-10 h-10 flex justify-center items-center text-gray-01">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <img src="/images/LogoFuturumIcon.png" className="block w-14 h-14 mx-auto" alt="logo" />
          {children}
        </div>
      </div>
    </>
  )
}