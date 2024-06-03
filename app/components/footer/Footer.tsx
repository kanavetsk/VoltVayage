import Link from "next/link";
import Container from "../Container";
import FooterList from "./FooterList";
import { MdFacebook } from "react-icons/md";
import {
  AiFillTwitterCircle,
  AiFillInstagram,
  AiFillYoutube,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="bg-slate-700 text-slate-200 text-sm mt-16">
      <Container>
        <div className="flex flex-col md:flex-row justify-between pt-16 pb-8">
          <FooterList>
            <h3 className="text-base font-bold mb-2">Категорії</h3>
            <Link href="#">Телефони</Link>
            <Link href="#">Ноутбуки</Link>
            <Link href="#">ПК</Link>
            <Link href="#">СмартЧаси</Link>
            <Link href="#">Телевізори</Link>
            <Link href="#">Аксесуари</Link>
          </FooterList>
          
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-base font-bold mb-2">Про нас</h3>
            <p className="mb-2">
            У нашому магазині електроніки ми надаємо найновіші речі
 і найкращі пристрої та аксесуари для наших клієнтів. З широким
 вибір телефонів, телевізорів, ноутбуків, годинників та аксесуарів.
            </p>
            
          </div>
          <FooterList>
            <h3 className="text-base font-bold mb-2">Соціальні мережі</h3>
            <div className="flex gap-2">
              <Link href="#">
                <MdFacebook size={24} />
              </Link>
              <Link href="#">
                <AiFillTwitterCircle size={24} />
              </Link>
              <Link href="#">
                <AiFillInstagram size={24} />
              </Link>
              <Link href="#">
                <AiFillYoutube size={24} />
              </Link>
            </div>
          </FooterList>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
