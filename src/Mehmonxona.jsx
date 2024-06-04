import React from 'react'
import ays from "./assets/zaryad.jpg"
import carl from "./assets/deraza.jpg"
import mishka from "./assets/serena.jpg"
import './Mehmonxona.css'
import Navbar from './navbar'
const Mehmonxona = () => {
    return (
    <>
    <Navbar/>
        <div className='container'>

<div className="item">
    <img className='admin' src={ays} alt="" />
    <div className="text">
        <h1>Arxaus</h1>
        <p>Bosh qarorgohi Ogayo shtatida joylashgan Arxaus 1986 yildan beri o'zining barcha mahsulotlarini AQShda loyihalashtirib, ishlab chiqaradi. Mahalliy ishlab chiqarilgan mahsulotlar nafaqat yuk tashish vaqtini, balki issiqxona gazlari chiqindilarini ham qisqartiradi. Brendning maqsadi? Avlodlar uchun sevilishi mumkin bo'lgan chiroyli, merosxo'r sifatli mebel va dekor yaratish. Ular yuqori sifatli materiallardan va ba'zi hollarda qo'lda tayyorlangan, shuning uchun agar siz bir chimdim ichida arzon qismlarni qidirsangiz, Arhaus siz uchun brend bo'lmasligi mumkin. Aks holda, chiroyli narsaga sarmoya kiriting va undan yillar davomida zavqlaning.</p>
        <button>ARHAUS DO'KON</button>
    </div>
</div>

<div className="item">
<img src={carl} className='admin' alt="" />
    <div className="text">
        <h1>Qizlar uyi</h1>
        <p>Umr boyi xizmat qiladigan hashamatli mebellar haqida gap ketganda, Qizlar uyiga murojaat qilish kerak. Har bir parcha, jumladan The Reade ovqat stoli Nyu-Yorkda ishlab chiqilgan va Shimoliy Karolinada qo'lda tayyorlangan. Bunday bejirim nafislikni boshqa hech bir joyda topa olmaysiz.</p>
        <button>QIZLAR UYINING DO'KON</button>
    </div>
</div>

<div className="item">
<img src={mishka} className='admin' alt="" />
    <div className="text">
        <h1>Serena va Lily</h1>
        <p>Sohilbo'y uslubini yaxshi ko'radiganlar Serena va Lilyni klassik mebellari va bezaklari bilan bilishadi - Riviera taburetlari eng yaxshi namunadir. Agar ular tanish bo'lib ko'rinsa, siz Frantsiya janubidagi ochiq havoda bistro stoli atrofida o'xshash narsalarni ko'rgan bo'lishingiz mumkin. Aslida, bu o'ziga xos rattanli stullar ko'plab frantsuz mebel dizaynerlari tomonidan qo'llanilgan vaqtli texnikada yaratilgan: ular ikonik shakl paydo bo'lguncha qo'lda egilib, shakllantiriladi. Serena va Lilyning barcha mebellari tafsilotlarga e'tibor bilan yaratilgan.</p>
        <button>SERENA VA LILYNI DO'KANING</button>
    </div>
</div>

</div>
    </>
    )
}

export default Mehmonxona