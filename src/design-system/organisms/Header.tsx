import { IconCart, IconHeart, IconUser } from "@atoms/Icon";
import { IconButton } from "@atoms/IconButton";
import { DepartmentsDropdown, DeptItem } from "@molecules/DepartmentsDropdown";
import { SearchBar } from "@molecules/SearchBar";
import LogoImg from "../../../public/images/logo/Shoptronics.png";

export interface HeaderProps {
  onSearch?: (q: string) => void;
}

// ✅ renamed component to BrandLogo (to avoid collision)
function BrandLogo() {
  return (
    <a href="/" className="flex items-center gap-1 text-xl font-semibold">
      <img
        alt="Shoptronics logo"
        src={LogoImg}
        className="h-6 w-auto object-contain select-none"
        draggable={false}
      />
    </a>
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
            <IconButton aria-label="Cart" badge={1}>
              <IconCart size={20} />
            </IconButton>
          </div>
        </div>

        {/* Bottom nav with Departments dropdown */}
        <nav className="relative flex h-12 items-center gap-6 text-sm text-gray-700">
          <DepartmentsDropdown items={DEPT_ITEMS} />
          <ul className="hidden items-center gap-6 md:flex">
            <li>
              <a className="hover:text-brand-700" href="#">
                Home
              </a>
            </li>
            <li>
              <a className="hover:text-brand-700" href="#">
                Shop
              </a>
            </li>
            <li>
              <a className="hover:text-brand-700" href="#">
                About
              </a>
            </li>
            <li>
              <a className="hover:text-brand-700" href="#">
                Account
              </a>
            </li>
            <li>
              <a className="hover:text-brand-700" href="#">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
