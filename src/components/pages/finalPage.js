import { PricingTable } from "../pricing-table";
// https://restolife.kz/upload/information_system_6/7/8/0/item_7805/small_information_items_property_22036.jpg
import {singers} from '../../data/singers';
import tttMusic from '../../assets/ttt.mp3'
import { useContext } from 'react';
import { ExpenseContext } from '../../Context';

export const FinalPage = () => {
    const {total, totalObject} = useContext(ExpenseContext);
    let status = false;
    console.log(totalObject);
    let audio = new Audio(totalObject.music);

    const playAudio = () => {
        if (!status) {
            audio.pause();
            status = true;
        } else {
            audio.play();
            status = false;
        }
    }

    return (
        <div>
            <div className="inner-rest">
                <img className="inner-rest-img" src="https://restolife.kz/upload/information_system_6/7/8/0/item_7805/information_items_property_22039.jpg"/>
                <img className="singer-img" src={totalObject.imageUrl}/>
            </div>
            <div className="flex-container">
            <button className="play-btn" onClick={playAudio}>Әнді ойнау</button>
            <PricingTable sum={total}/>
            </div>
        </div>
    );
};