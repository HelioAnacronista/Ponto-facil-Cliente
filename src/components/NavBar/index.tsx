import { DropdownComponent } from "../DropdownComponent";

export function NavBar() {
  return (
    <>
      <div className="hidden lg:flex">
        <DropdownComponent subTitle="Eletrodomésticos" title="Eletronicos" />
        <DropdownComponent subTitle="Eletrodomésticos" title="Produtos" />
        <DropdownComponent subTitle="Eletrodomésticos" title="Tigolo" />
        <DropdownComponent subTitle="Eletrodomésticos" title="Eletronicos" />
      </div>
    </>
  );
}
