import React from 'react'
import stakan from "./assets/dafna.jpg"
import car from "./assets/copy.jpg"
import sichqon from "./assets/menu.jpg"
import './Mehmonxona.css'
import Navbar from './navbar'
const Oshxona = () => {
    return (
        <>
<Navbar/>
            <div className='container'>

                <div className="item">
                    <img className='admin' src={stakan} alt="" />
                    <div className="text">
                        <p>Oshxonaga kirganingizda, siz peshtaxtalar oldidagi kabinetni yoki hatto oshpazga munosib jihozlarni ko'rishingiz mumkin. Shu sababli, oshxona kabinetlari uchun qanday rang, uskuna va hatto eshik uslubini tanlashni hal qilish umumiy makon dizayniga osongina ta'sir qilishi mumkin. Shkaflar oshxonangizning kayfiyatini bir zumda o'zgartirishi mumkin. O'zingizning orzuingizdagi zamonaviy ferma uyiga erishish uchun oddiy shaker shkaflarini afzal ko'rasizmi yoki kichik oshxonani yanada kengroq va ochiqroq qilish uchun ochiq javonlarni tanlaysizmi, biz bu erda 69 ta eng yaxshi oshxona shkafi g'oyalarini taqdim etamiz.
                            Yangi peshtaxtalarni o'rnatishdan farqli o'laroq, oshxona kabinetini yangilash - bu faqat bir hafta oxirida bajarilishi mumkin bo'lgan oson DIY loyihasi. Tejamkor yangilash uchun shkaf tutqichlarini va tortma tortmachalarini almashtiring. Yoki kattaroq taʼsir koʻrsatish uchun oshxona kabinetlariga 2024-yilning eng mashhur ranglaridan biriga yangi boʻyoq qoʻshing. Oshxonangizga yangi hayot bagʻishlash uchun ichakni taʼmirlash shart emas.
                            Katta ta'mirlashni rejalashtiryapsizmi yoki kichik, ammo ta'sirli o'zgarishlar qilishni xohlaysizmi, bizda zerikarli eski shkaflardan uzoqroq bo'lgan oshxona kabinalarini loyihalash g'oyalari mavjud. Klassik dog'lar va qalin bo'yoqlardan batafsil oshxona jihozlari va aralash materiallargacha, bu dizaynerlar tomonidan tasdiqlangan shkaflar g'oyalari asosiy ilhom manbai bo'lib xizmat qiladi.</p>
                    </div>
                </div>

                <div className="item">
                    <img src={sichqon} className='admin' alt="" />
                    <div className="text">
                        <h1>Jihozlarni yashiring</h1>
                        <p>Ushbu ho'l barda saqlash joyi guruch shkafi jabhalari bilan yashirin jihozlarga almashtiriladi. Kattalar va bolalar uchun ichimliklar Signature Kitchen Suite’dan konvertatsiya qilinadigan stol ostidagi muzlatgich tortmalarida alohida saqlanishi mumkin. Bundan tashqari, tepadagi yashirin, kichikroq tortma shirinliklarni saqlash uchun juda mos keladi.</p>
                    </div>
                </div>

                <div className="item">
                    <img src={car} className='admin' alt="" />
                    <div className="text">
                        <h1>Shkaflaringizni siz uchun ishlang</h1>
                        <p>Barcha dasturxonlaringizni tortmalarda saqlash g'alati tuyulishi mumkin bo'lsa-da, odamlar yuqori shkaflardan voz kechishni afzal ko'rganligi sababli, bu tobora keng tarqalgan. Urbanology tomonidan ishlab chiqarilgan ushbu tizim har bir tortmaning ichki qismini sozlash uchun qoziqlardan foydalanadi.</p>
                           
                    </div>
                </div>

            </div>
        </>
    )
}

export default Oshxona 