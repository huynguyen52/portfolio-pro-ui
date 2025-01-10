type DropdownMenuProps = {
  dropdownTrigger: React.ReactNode;
  children: React.ReactNode;
};

export function DropdownMenu({ dropdownTrigger, children }: DropdownMenuProps) {
  return (
    <div className="relative cursor-pointer">
      <div className="peer">{dropdownTrigger}</div>
      <div className="z-10 duration-300 opacity-0 hover:opacity-100 peer-hover:opacity-100 absolute top-3/4 -left-full">
        {children}
      </div>
    </div>
  );
}
