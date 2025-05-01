export default function Modal({ open, onClose, children }) {
  

  return (
    <div className={`fixed inset-0 z-50 flex items-center 
        justify-center transition-colors"
        ${open ? "visible bg-black/20": "invisible"}
    `}>
        <div>
        {children}
        </div>
    </div>
  );
}
