import './index.css'
import { Link } from 'react-router-dom';

const singers = [
    {
        imageUrl: "https://images.satu.kz/83879044_w640_h640_kajrat-nurtas.jpg",
        itemName: "Қайрат Нұртас",
        songCost: "1000$"
    },
    {
        imageUrl: "https://encyclopedia.kz/wp-content/uploads/2018/12/%D0%95%D1%80%D0%BA%D0%B5-%D0%95%D1%81%D0%BC%D0%B0%D1%85%D0%B0%D0%BD.jpg",
        itemName: "Ерке Есмахан",
        songCost: "1000$"
    },
    {
        imageUrl: "https://opennews.kz/uploads/posts/2021-03/1617190078_unnamed.jpg",
        itemName: "Әбдіжаппар Әлқожа",
        songCost: "1000$"
    },
    {
        imageUrl: "https://i.scdn.co/image/ab67616d0000b273ff8079d251c5fcb42837f6fc",
        itemName: "Абай Бегей",
        songCost: "1000$"
    },
    {
        imageUrl: "https://lmusic.kz/images/artist_cover/akylbek-zhemenej.jpg",
        itemName: "Ақылбек Жеменей",
        songCost: "1000$"
    },
    {
        imageUrl: "https://sxodim.com/uploads/astana/2016/09/optimized/43111134_545x305-q-85.jpg",
        itemName: "Мадина Садвакасова",
        songCost: "1000$"
    },
    {
        imageUrl: "https://total.kz/storage/2e/2e05c2ce6e56bf34245ebbe53f1902d3_resize_w_830_h_465.jpg",
        itemName: "Төреғали Төрәлі",
        songCost: "1000$"
    },
    {
        imageUrl: "https://i.scdn.co/image/ab6761610000e5eba02c7647109257d351eb8ef8",
        itemName: "Ninety One",
        songCost: "1000$"
    }
]

const tamadas = [
    {
        imageUrl: "https://zhambylnews.kz/wp-content/uploads/2022/04/1523626221f09w6-740x-740x430.jpg",
        Name: "Нұрлан Қоянбаев",
        Cost: "1000$"
    },
    {
        imageUrl: "https://sn.kz/uploads/news/2021/08/20/611f8de2a2af7215460247.jpg",
        Name: "Тұрсынбек Қабатов",
        Cost: "1000$"
    },
    {
        imageUrl: "https://zhambylnews.kz/wp-content/uploads/2022/04/1523626221f09w6-740x-740x430.jpg",
        Name: "Нұрлан Қоянбаев",
        Cost: "1000$"
    },
    {
        imageUrl: "https://zhambylnews.kz/wp-content/uploads/2022/04/1523626221f09w6-740x-740x430.jpg",
        Name: "Нұрлан Қоянбаев",
        Cost: "1000$"
    },
]



export const FormItems = () => {

    const valueChangeHandler = (e, item) => {
        console.log(e.target.value);
        console.log(item);
    }
    return (
        <div className='container'>
            <div className='title'>Би мен қойылым</div>
            <div className='instruction'>Әншілер</div>
            <div className="items">
                {singers.map((item) => (
                    <div className="item-wrapper">
                        <img src={item.imageUrl} className="item-img"/>
                        <div className="item-name">{item.itemName}</div>
                        <img src='https://www.pngkey.com/png/full/45-455945_vip-party-weekend.png' className="class-img"/>
                        <div className="item-control">
                            <div >Әндер саны: </div>
                            <input type="number" className="item-input" onChange={(e) => valueChangeHandler(e, item)}/>
                            <button className="item-buy item-btn">Заказ беру</button>
                        </div>
                    </div>
                ))}
            </div>
            <div className='instruction'>Тамада</div>
            <div className="items">
                {tamadas.map((item) => (
                    <div className="item-wrapper">
                        <img src={item.imageUrl} className="item-img"/>
                        <div className="item-name">{item.Name}</div>
                        <div className="item-control">
                            <div >Әндер саны: </div>
                            <input type="number" className="item-input" />
                            <button className="item-buy">Заказ беру</button>
                        </div>
                    </div>
                ))}
            </div>
            <Link to="/page2" className='desc-wrapper'><button id="calc-btn" style={{padding: "20px 40px", margin: "40px"}}>Келесі</button></Link>
        </div>
    )
}