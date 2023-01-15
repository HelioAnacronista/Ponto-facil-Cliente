import { DropdownComponent } from "../DropdownComponent";

export function NavBar() {
  return (
    <>
      <div className="flex mx-auto">
        <DropdownComponent subTitle="Eletrodomésticos" title="Eletronicos" />
        <DropdownComponent subTitle="Eletrodomésticos" title="Produtos" />
        <DropdownComponent subTitle="Eletrodomésticos" title="Tigolo" />
        <DropdownComponent subTitle="Eletrodomésticos" title="Eletronicos" />
      </div>
    </>
  );
}
