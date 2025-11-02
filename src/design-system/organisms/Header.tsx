import { IconCart, IconHeart, IconUser } from "@atoms/Icon";
import { IconButton } from "@atoms/IconButton";
import { DepartmentsDropdown, DeptItem } from "@molecules/DepartmentsDropdown";
import { MiniCart } from "@molecules/MiniCart";
import { SearchBar } from "@molecules/SearchBar";
import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../store/cart";

export interface HeaderProps {
  onSearch?: (q: string) => void;
}

// ✅ renamed component to BrandLogo (to avoid collision)
function BrandLogo() {
  return (
    <Link to="/" className="flex items-center gap-1 text-xl font-semibold">
      <img
        src="/images/logo/Shoptronics.png"
        alt="Shoptronics"
        className="h-6 w-auto object-contain"
      />
    </Link>
  );
}
const DEPT_ITEMS: DeptItem[] = [
  { id: "mobile", label: "Mobile", imageSrc: "/images/departments/mobile.png" },
  {
    id: "computer",
    label: "Computer",
    imageSrc: "/images/departments/computer.png",
  },
  {
    id: "digitalWatch",
    label: "Digital Watch",
    imageSrc: "/images/departments/digital-watch.png",
  },
  {
    id: "sound",
    label: "Sound System",
    imageSrc: "/images/departments/sound.png",
  },
  {
    id: "smartWatch",
    label: "Smart Digital Watch",
    imageSrc: "/images/departments/smart-watch.png",
  },
  {
    id: "speaker",
    label: "Speaker",
    imageSrc: "/images/departments/speaker.png",
  },
];

export function Header({ onSearch }: HeaderProps) {
  const { count } = useCart();
  const [openCart, setOpenCart] = React.useState(false);

  React.useEffect(() => {
    const onEsc = (e: KeyboardEvent) =>
      e.key === "Escape" && setOpenCart(false);
    document.addEventListener("keydown", onEsc);
    return () => document.removeEventListener("keydown", onEsc);
  }, []);
  return (
    <header className="sticky top-0 z-10 w-full border-b border-gray-200 bg-white/80 backdrop-blur">
      <div className="mx-auto max-w-6xl px-6">
        {/* Top row */}
        <div className="flex h-16 items-center gap-6">
          <BrandLogo />
          <div className="hidden flex-1 md:block">
            <SearchBar onSearch={onSearch} />
          </div>
          <div className="ml-auto flex items-center gap-1">
            <IconButton aria-label="Account">
              <IconUser size={20} />
            </IconButton>
            <IconButton aria-label="Wishlist">
              <IconHeart size={20} />
            </IconButton>
            <div className="relative">
              <IconButton
                aria-label="Cart"
                badge={1}
                onClick={() => setOpenCart((v) => !v)}
                className="relative rounded-lg p-2 hover:bg-gray-100"
              >
                <IconCart size={20} />

                {count > 0 && (
                  <span className="absolute -right-1 -top-1 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-brand-600 px-1 text-xs text-white">
                    {count}
                  </span>
                )}
              </IconButton>
              <MiniCart open={openCart} />
            </div>
          </div>
        </div>

        {/* Bottom nav with Departments dropdown */}
        <nav className="relative flex h-12 items-center gap-6 text-sm text-gray-700">
          <DepartmentsDropdown items={DEPT_ITEMS} />
          <ul className="hidden items-center gap-6 md:flex">
            <li>
              <Link className="hover:text-brand-700" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="hover:text-brand-700" to="/shop">
                Shop
              </Link>
            </li>
            <li>
              <Link className="hover:text-brand-700" to="#">
                About
              </Link>
            </li>
            <li>
              <Link className="hover:text-brand-700" to="/signin">
                Account
              </Link>
            </li>
            <li>
              <Link className="hover:text-brand-700" to="#">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
