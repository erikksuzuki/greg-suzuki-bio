import { FeaturedIcon } from './icons/FeaturedIcon'
import { XMarkIcon } from './icons/app/XMark'
import { useEffect, useRef, useState } from 'react'
import ReactDOM from 'react-dom'

type ModalProps = {
  show: boolean
  children: React.ReactNode
  onClose?: () => void
}

const MODAL_PORTAL_ROOT_ID = 'modal-portal-root'

const Modal = ({ show, onClose, children }: ModalProps) => {
  const [portalEl, setPortalEl] = useState<HTMLElement | null>(null)
  const modalWrapperRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = document.getElementById(MODAL_PORTAL_ROOT_ID)
    setPortalEl(el)
  }, [])

  const onClickBackdrop = (e: any) => {
    if (e?.target === modalWrapperRef.current && onClose) onClose()
  }

  const content = show ? (
    <div
      onClick={onClickBackdrop}
      ref={modalWrapperRef}
      className="fixed z-40 top-0 left-0 w-full h-full flex items-center justify-center bg-lazarus-gray-700 bg-opacity-70"
    >
      <div className="p-4">{children}</div>
    </div>
  ) : null

  if (portalEl) return ReactDOM.createPortal(content, portalEl)
  return <></>
}

const ModalWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <aside className="w-full max-w-sm rounded-xl bg-white shadow-xl mx-auto max-h-[80%]">
      {children}
    </aside>
  )
}

const ModalHeader = ({ onClose, title, subtitle, icon }: any) => {
  return (
    <header className="relative pb-6">
      <button className="absolute top-3 right-3 p-2.5" onClick={onClose}>
        <XMarkIcon />
      </button>
      <div className="px-4 pt-5">
        {icon && <FeaturedIcon>{icon}</FeaturedIcon>}
        {title && (
          <h3 className="text-lazarus-lg text-lazarus-gray-900 font-semibold">
            {title}
          </h3>
        )}
        {subtitle && (
          <p className="text-lazarus-sm text-lazarus-gray-600 pt-1">
            {subtitle}
          </p>
        )}
      </div>
    </header>
  )
}

const ModalContentWrapper = ({ children }: { children: React.ReactNode }) => {
  return <div className="px-4 max-h-[60vh] overflow-y-auto">{children}</div>
}

const ModalFooterWrapper = ({ children }: { children: React.ReactNode }) => {
  return <footer className="px-4 pb-4 pt-6">{children}</footer>
}

export {
  Modal,
  ModalContentWrapper,
  ModalFooterWrapper,
  ModalHeader,
  ModalWrapper,
}
