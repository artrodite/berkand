import React from "react";

export default function Footer() {
  return (
    <div>
      <div className="px-14 max-[1741px]:hidden">
        <div className="h-72 py-16 border-t-[1px] border-b-[1px] border-black flex">
          <div className="flex items-center mr-52">
            <img src="/assets/logoFooter.png" alt="" />
          </div>
          <div className="mr-24">
            <span className="font-semibold">Site</span>
            <ul>
              <li className="mt-4 underline">Ana Sayfa</li>
              <li className="mt-2 underline">Ürünlerimiz</li>
              <li className="mt-2 underline">Hakkımızda</li>
              <li className="mt-2 underline">İletişim</li>
            </ul>
          </div>
          <div className="mr-24">
            <span className="font-semibold">Sosyal Medya</span>
            <ul>
              <li className="mt-2">Instagram</li>
              <li className="mt-2">Facebook</li>
              <li className="mt-2">LinkedIn</li>
            </ul>
          </div>
          <div className="flex flex-col mr-24 w-60">
            <span className="font-semibold">Adres</span>
            <span className="mt-4 font-normal">
              Hacıeyüplü Mahallesi 3075 Sokak No:20/2 Merkezefendi DENİZLİ
            </span>
          </div>
          <div>
            <span className="font-semibold">İletişim Bilgilerimiz</span>
            <div className="flex mt-4">
              <div className="flex flex-col mr-16">
                <span>CEO Ramazan Yılmaz</span>
                <span className="mt-2">Pazarlama</span>
                <span className="mt-2">Sabit Hat</span>
              </div>
              <div className="flex flex-col mr-16">
                <span>+90 552 295 96 11</span>
                <span className="mt-2">+90 536 630 96 11</span>
                <span className="mt-2">+90 258 251 25 82</span>
              </div>
              <div className="flex flex-col">
                <span>sales@berkandmakina.com.tr</span>
                <span className="mt-2">info@berkandmakina.com.tr</span>
                <span className="mt-2">info@berkandmakina.com.tr</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between my-12">
          <span className="font-normal font-[Catamaran]">
            © {new Date().getFullYear()} Berkand Makina, Tüm Hakları Saklıdır
          </span>
          <img src="/assets/artrodite.png" alt="" />
        </div>
      </div>
      <div className="min-[1741px]:hidden flex justify-center items-center my-12">
        <img src="/assets/logo-footer-md.svg" alt="" />
      </div>
    </div>
  );
}
