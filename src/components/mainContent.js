import Team from "./Team";
import ProductCont from "./Products";
import Contact from "./contact"; 

const Main = () => {
    return (
        <main className='main-content'>
            <section className='section-team' id="team"> 
                <div className='max-width-12'> <Team /> </div> 
            </section> 
            <section className="section-products" id="products">
            <div className='max-width-12'> <ProductCont/> </div> 
            </section> 
            <section class="contact-section">
                <div className="max-width-12"><Contact /> </div>
            </section>
        </main>    
    ) 
}

export default Main; 