import React from 'react'
import HotItemCard from "../components/HotItemCard.js"
import "../styles/HotAccessories.css"

function HotAccessories({ music, musicCover, smartDevicesCover, smartDevices, homeCover, home, lifestyleCover, lifestyle, mobileAccessoriesCover, mobileAccessories }) {
    return (
        <div className='HotAccessories'>
            <div>
                <img src={musicCover || smartDevicesCover || homeCover || lifestyleCover || mobileAccessoriesCover} alt="cover" />
            </div>
            {/* 2nd div */}
            <div>
                {music && music.map((item, index) => (
                    <HotItemCard key={item.image} name={item.name} price={item.price} image={item.image} index={index}></HotItemCard>
                ))}

                {smartDevices && smartDevices.map((item, index) => (
                    <HotItemCard key={item.image} name={item.name} price={item.price} image={item.image} index={index}></HotItemCard>
                ))}

                {home && home.map((item, index) => (
                    <HotItemCard key={item.image} name={item.name} price={item.price} image={item.image} index={index}></HotItemCard>
                ))}

                {lifestyle && lifestyle.map((item, index) => (
                    <HotItemCard key={item.image} name={item.name} price={item.price} image={item.image} index={index}></HotItemCard>
                ))}
                
                {mobileAccessories && mobileAccessories.map((item, index) => (
                    <HotItemCard key={item.image} name={item.name} price={item.price} image={item.image} index={index}></HotItemCard>
                ))}
                
                <HotItemCard image="	https://i01.appmifile.com/webfile/globalimg/in/cms/593181BE-7DB8-15F5-E907-506427B8C9F4.jpg"/>

            </div>

        </div>
    )
}

export default HotAccessories
