export default function Logo2({ className = "h-12" }: { className?: string }) {
  return (
    <div className={`${className} flex items-center`}>
      <img 
        src="/logo bien asido.png" 
        alt="DermaScan Logo 2" 
        className="h-full w-auto"
      />
    </div>
  );
}