import { Divider } from "antd"
import "./App.css"
import Banner from "./Banner"
import Info from "./Info"
import rasm from "./assets/mebel.jpg"
import rass from "./assets/bmw.jpg"
import rsmm from "./assets/mers.jpg"
import raaa from "./assets/stol.jpg"
import { Link } from "react-router-dom"
import Navbar from "./navbar"
function  Home() {

    return (
        <>
<Navbar/>
      
        <Divider orientation="left">Mebellar</Divider>

<div className="hero">
 <img width={"100%"} src={rasm}></img>

</div>
        
       <Banner/>
       <Info/>
       <div className="divan_turlari">
        <div className="mebel">
            <h3>
               Divanlar
            </h3>
            <p> Divan va divan to'shaklari har qanday yashash xonasining asosi bo'lib, qulaylik va funksionallikni ta'minlaydi. Yashash xonasi mebellari nafaqat dam olish va muloqot qilish uchun o'rindiqlarni ta'minlabgina qolmay, balki mehmonlar uchun uyqu echimlari sifatida ham ikki baravar bo'lib, ularni uyingizga ko'p qirrali qo'shimchalar qiladi.</p>
        </div>

        <div className="mebel">
            <h3>
               divan yotoqlari
            </h3>
            <p> Divan to'shak - bu sizning mehmonlaringiz uchun mebel. Ko'p qirrali divan karavoti bilan siz kunduzi dam olish va dam olish uchun joyingiz va kechasi bo'sh joyni tejaydigan qulay uyqu maydoniga egasiz. Agar sizning joyingiz cheklangan bo'lsa, xonangizga divan va to'shakni o'rnatish qiyin bo'lishi mumkin. Bunday holda, divan to'shagi sizga kerak bo'lgan yechim bo'lishi mumkin.</p>
        </div>
        <div className="dafna_mebel">
            <h3>
            To'shaklar
            </h3>
            <p> To'shaklar har qanday yotoqxonaning asosiy nuqtasi bo'lib, dam olish va yoshartirish uchun qo'riqxona bo'lib xizmat qiladi. Uslublar, o'lchamlar va xususiyatlar majmuasi bilan yotoqxona uchun mukammal mebel tanlash qulay va vizual yoqimli uyqu muhitini yaratish uchun juda muhimdir.</p>
        </div>
        <div className="mebel_divan">
            <h3>
            Shkaflar
            </h3>
            <p>Shkaflar yotoqxona xonasining asosiy toshi bo'lib, kiyim-kechak, aksessuarlar va shaxsiy buyumlar uchun ajratilgan joyni ta'minlaydi. To'g'ri shkafni tanlash kiyimingizni tartibli va yotoqxonangizni tartibsiz saqlash uchun juda muhimdir.</p>
        </div>
        <div className="mebel_totoqlar">
            <h3>
            Jadvallar
            </h3>
            <p>Stollar - bu uylarda, ofislarda va turli xil sharoitlarda mavjud bo'lgan mebel qismlari. Ular ovqatlanish va ishlashdan tortib bezak buyumlarini namoyish qilishgacha bo'lgan ko'plab funktsiyalar uchun ko'p qirrali sirt bo'lib xizmat qiladi. Jadvalni to'g'ri tanlash, uning mo'ljallangan maydonni to'ldirishini va o'z maqsadini samarali bajarishini ta'minlash uchun o'lcham, shakl, material va uslub kabi omillarni hisobga olishni o'z ichiga oladi.</p>
        </div>
        <div className="dev7">
            <h3>
            Kreslolar
            </h3>
            <p> Kreslolar har xil shakl va o'lchamlarda bo'ladi, ularning har biri ma'lum bir maqsadga xizmat qiladi. Ovqatlanish stullaridan tortib ofis stullari va aksent stullarigacha, ular yashash joylarida qulaylik va vizual jozibadorlikni ta'minlab, o'tiradigan joy va uslubning muhim elementlari hisoblanadi.</p>
        </div>
            <div className="dev8">
                <h3>
                Shkaflar va shkaflar uchun mebel
                </h3>
                <p>Shkaflar va shkaflar sizning uyingizning estetikasini yaxshilagan holda amaliy saqlash echimlarini taklif qiladi. Ushbu ko'p qirrali qismlarni turli xonalarda topish mumkin, bu esa tartibsiz muhit uchun yashirin saqlashni ta'minlaydi.</p>
            </div>
            <div className="dev9">
                <h3>
                Kiyinish stollari
                </h3>
                <p>Kiyinish stoli, shuningdek, bezak stoli sifatida ham tanilgan, yotoqxona yoki kiyinish xonalarida joylashgan mebel qismidir. Asosiy maqsad - parvarish qilish, shaxsiy parvarish qilish va bo'yanish uchun joy ta'minlash. IKEA-ning kiyinish stolining turli xil variantlarini o'rganing.</p>
            </div>
            <div className="dev22">
                <h3>
                    Mebel to'plamlari
                </h3>
                <p>Mebel to'plamlari ichki dizaynga muvofiqlashtirilgan yondashuvni taklif qiladi. Ushbu keng qamrovli to'plamlar sizning makoningizda uyg'un va yagona ko'rinishni ta'minlaydigan turli qismlarni o'z ichiga oladi. Yotoq xonasi, yashash xonasi yoki ovqat xonasi uchun bo'ladimi, mebel to'plamlari uyg'un va zamonaviy uy yaratish jarayonini soddalashtiradi.</p>
            </div>
            <div className="dev34">
                <h3>
                     Sandiq va tortma birliklari
                </h3>
                <p>Sandiqlar va tortma birliklari sizning narsalaringizni tartibli saqlash va oson kirish uchun ajralmas hisoblanadi. Yotoq xonasida, yashash xonasida yoki ofisda bo'ladimi, bu mebel qismlari dekoratsiyaga hissa qo'shish bilan birga qimmatli saqlash joyini taklif qiladi. </p>
            </div>
            <div className="dev99">
                <h3>
                    Kitob javonlari va javonlar
                </h3>
                <p>Kitob javonlari va javonlar uylar va ofislarda tashkil qilish va namoyish qilish uchun zarurdir. Ular nafaqat kitoblarni saqlaydi, balki bezak buyumlarini ham namoyish etadi, bu ularni yashash joylariga funktsional va estetik qo'shimchalar qiladi.</p>
            </div>
            <div className="dev23">
                <h3>
                Kreslolar va kreslolar
                </h3>
                <p>Kreslolar va kreslolar dam olish va uslub uchun mo'ljallangan. Ushbu qulay o'rindiqlar klassikadan tortib to zamonaviygacha bo'lgan turli dizaynlarda bo'lib, ularni o'qish, dam olish yoki dekoringizga bezak qo'shish uchun ideal qiladi.</p>
            </div>
            <div className="dev44">
                <h3>
                    Televizor va media mebellari
                </h3>
                <p>Televizor va media mebellari ko'ngilochar texnologiyalarning doimiy rivojlanayotgan dunyosiga mos keladi. Ushbu jihozlar televizorlar, o'yin pristavkalari, audio jihozlar va media to'plamlarini joylashtirish uchun mo'ljallangan bo'lib, uyushtirilgan va zamonaviy uy o'yin-kulgilarini sozlashni ta'minlaydi.</p>
            </div>
            <div className="dev64">
                <h3>
                    Bolalar bog'chasi va bolalar mebellari
                </h3>
                <p>Bolalar bog'chasi mebellari ota-onalar va chaqaloqlarning ehtiyojlariga moslashtirilgan. Kichkintoyingiz uchun beshiklar, o'zgaruvchan stollar va saqlash jihozlari xavfsiz, tartibli va estetik jihatdan yoqimli muhit yaratishga yordam beradi.</p>
            </div>
            <div className="dev74">
                <h3>
                    Bar va stullar
                </h3>
                <p>Bar mebellari sizning uyingizning ko'ngilochar imkoniyatlarini oshiradi. Bar aravalaridan tortib, uy barlari va kursilarigacha, bu qismlar ichimliklar tayyorlash va lazzatlanishni osonlashtiradi va sizning makoningizga nafislik qo'shadi.</p>
            </div>
            <div className="dev88">
                <h3>
                Xonani ajratuvchilar
                </h3>
                <p>Xona ajratgichlari xona ichidagi yashash joylarini aniqlash va ajratishga yordam beradi. Ochiq javonlardan tortib dekorativ ekranlargacha, bu ko'p qirrali qismlar ochiq qavat rejalarida maxfiylik, tashkilotchilik va vizual qiziqishni taklif qiladi.</p>
            </div>
            <div className="dev82">
                <h3>
                    Trolleybuslar
                </h3>
                <p>Trolleybuslar qulaylik va moslashuvchanlikni ta'minlaydigan mobil va ko'p funktsiyali mebellardir. Oshxonada, barda yoki ofisda bo'ladimi, ular g'ildiraklarda saqlash va xizmat ko'rsatish echimlarini taklif qilishadi.</p>
            </div>
            <div className="kol">
               <div>
               <img src={rass} alt="" />
               <p>800.000 sum</p>
               </div>
                <div>
                <img src={raaa} alt="" />
                <p>300.000 sum</p>

                </div>
                <div>
                <img src={rsmm} alt="" />
                <p>500.000 sum</p>

                </div>
            </div>
           
       </div>
        </>
    )
}

    
  export default Home 