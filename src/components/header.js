import heroImg from "../assets/imgs/cow_header_600.png";
const Header = () => {
    return (
        <header className="header margin-bottom-huge" id="home"> 
            <div className="max-width-12">
                <div className="row header-hero-cont">
                    <div className="col-1-of-2 header-left">
                        <div className="header-headings">
                            <h1 className="primary-heading margin-bottom-big"> Increase cow’s milk Production to 40 liters </h1>
                            <p className="header-paragraph">Discover our incredible dairy product designed to naturally boost milk production in dairy animals. Packed with a special blend of organic ingredients</p>
                        </div>    
                    </div> 
                
                    <div className="col-1-of-2 header-right">
                         <div className="header-img-box">
                            <img src={heroImg} className="header-hero_img"/>
                         </div> 
                    </div>
                </div>
            </div>
        </header>
    ) 
}

export default Header;  