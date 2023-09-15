import founderImgUrl from '../assets/imgs/opt-founder-img.jpg';
import campniesImgUrl from '../assets/imgs/founder-campanies-2x.png'; 
import member1Img from '../assets/imgs/team-member-1.jpg';  
import member2Img from '../assets/imgs/team-member-2.jpg';
import member3Img from '../assets/imgs/team-member-3.jpg';

 
const Team = () => {
    const team = {
        secHeading: 'Meet our Team', 
        member1Name: 'Adnan Abdullah',
        member2Name: 'Omar Amjad',
        member3Name: 'Dr akbar Ali'
    } 
    const teamMemImgs = {
        tMem1Img: member1Img,
        tMem2Img: member2Img,
        tMem3Img: member3Img,
    }   
    const teamMemRoles = {
        member1Role: 'IT and Development',
        member2Role: 'Marketing Head',
        member3Role: 'Production Incharge', 
    } 
    const teamMesages = {
        member1Msg: '“ Driven by a passion for innovation, the fearless developer explores new territories, pushing the limits of what we can achieve ”',
        member2Msg: '“ Our field marketing agent effortlessly connects with customers, creating a loyal community of dairy enthusiasts “',
        member3Msg: '“ Ensures that every step of the manufacturing process is executed with precision, resulting in products that are nothing short of exceptional “'
    }; 
    const colorsClasses = {
        borderPrimaryGreen: 'border-green-top',
        borderPrimaryOrange: 'border-orange-top',
        borderPrimaryBlue: 'border-blue-top', 
        BgGreenLite: 'bg-green-lite',
        BgOrangeLite: 'bg-orange-lite',
        BgBlueLite: 'bg-blue-lite', 
    }
    return (
            <div className='team margin-bottom-section'> 
                <h1 className='primary-heading margin-bottom-lg'> {team.secHeading} </h1> 
                <div className='founder-content founder-flexed'>   
                <FounderImg />  
                <FounderDetails />  
                <FounderAbout/>   
                </div> 
                <div className='team-members row'> 
                <TeamMember name={team.member1Name} role={teamMemRoles.member1Role} message={teamMesages.member1Msg} Img={`.${member1Img}`} colorBg={colorsClasses.BgGreenLite} colorBorder={colorsClasses.borderPrimaryGreen}/>
                <TeamMember name={team.member2Name} role={teamMemRoles.member2Role} message={teamMesages.member2Msg} Img={`.${member2Img}`} colorBg={colorsClasses.BgOrangeLite} colorBorder={colorsClasses.borderPrimaryOrange}/>
                <TeamMember name={team.member3Name} role={teamMemRoles.member3Role} message={teamMesages.member3Msg} Img={`.${member3Img}`} colorBg={colorsClasses.BgBlueLite} colorBorder={colorsClasses.borderPrimaryBlue}/>    
                </div>    
            </div>     
    )  
} 
 
const TeamMember = ({name,role,message,colorBorder,colorBg,Img}) => { 
    return (
        <div className={`member member-1 col-1-of-3 ${colorBg} ${colorBorder} padding-all-1`}>     
            <MemberImg ImgUrl={Img}/>  
            <MemberDetails name={name} role={role} message={message} />  
        </div>   
    ) 
} 

const MemberImg = ({ImgUrl}) => {
    return (
            <div className='member-img-box '>  
                <img src={ImgUrl} alt='team member 1' className='img-width-100'/>  
            </div> 
    )
} 

const MemberDetails = ({name,role,message}) => {
    return (
        <div className='member-details text-center margin-top-ex-sm'> 
            <h1 className='secondary-heading-sm'>{name}</h1>
            <h2 className='heading-role margin-bottom-lg'>{role}</h2>
            <h2 className='member-about-description margin-bottom-lg'>{message}</h2>
        </div>
    )  
}
 
const FounderImg = () => {
    return (
        <div className='founder-img-box'> 
            <img src={`.${founderImgUrl}`} alt='founder' className='img-width-100'/>    
        </div>    
    )  
}   

const FounderDetails = () => {
    const founderInfo = { 
        name: 'Imran Hassan',
        role: 'founder and ceo',
        experience: 'Experience: 20 years', 
        campanies: 'campanies:', 
    } 
    return (
        <div className='founder-info'> 
            <h2 className='heading-seconday'>{founderInfo.name}</h2> 
            <h2 className='heading-role margin-bottom-ex-sm'>{founderInfo.role}</h2>
            <h2 className='heading-experience margin-bottom-ex-sm'>{founderInfo.experience}</h2>
            <h4 className='heading-campanies margin-bottom-ex-sm'>{founderInfo.campanies}</h4>
            <FounderCampanies/> 
        </div>     
    )  
}  
const FounderCampanies = () => {
    return (
        <div className='founder-companies-box'>
            <img src={campniesImgUrl} alt='founder campanies' className='img-width-100'/>  
        </div> 
    ) 
}
const FounderAbout = () => {
    const about = `A visionary leader, the founder's unwavering commitment to community development and support forged strong partnerships, ensuring the success of not just their company, but also the local dairy industry as a whole.` 
    return (
        <div className='founder-about'>
            <p className='founder-about-description'>
             <span className='txt-quotes'> " </span> {about} <span className='txt-quotes'> " </span>
             </p>  
        </div>  
    )
}
export default Team;