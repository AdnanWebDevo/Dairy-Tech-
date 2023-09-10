import productImg from '../assets/imgs/wanda megalac.png'; 
const ProductCont = () => {
    const prodcutOne = {
        name: 'Bypass Fat',
        fat: 'Fat %: 84',
        calcium: 'Calcium %: 8-10',
        moisture: 'Moisture %: <5',
        life: 'Shelf life: 24 months',
        benefit1: 'High Milk Production',
        benefit2: 'HIgher Body Score',
        benefit3: 'Improved Fertility',
        contactNo: '+92 3006791000', 
    } 
    const prodcutTwo = {
      name: 'Toxin Binder',
      fat: 'Fat %: 84',
      calcium: 'Calcium %: 8-10',
      moisture: 'Moisture %: <5',
      life: 'Shelf life: 24 months',
      benefit1: 'High Milk Production',
      benefit2: 'HIgher Body Score',
      benefit3: 'Improved Fertility',
      contactNo: '+92 3006791000', 
  } 
  const productThree = {
    name: 'Prefixer',
    fat: 'Fat %: 84',
    calcium: 'Calcium %: 8-10',
    moisture: 'Moisture %: <5',
    life: 'Shelf life: 24 months',
    benefit1: 'High Milk Production',
    benefit2: 'HIgher Body Score',
    benefit3: 'Improved Fertility',
    contactNo: '+92 3006791000', 
} 
    const ProductColors = {
        productClrGreen : 'bg-primary-green',
        productClrOrange: 'bg-primary-orange',
        ProductClrBlue: 'bg-primary-blue' 
    } 
    return (
        <div className='products row margin-bottom-huge'>  
            <Products productInfo={prodcutOne} BgColor={ProductColors.productClrGreen}/>
            <Products productInfo={prodcutTwo} BgColor={ProductColors.productClrOrange}/>
            <Products productInfo={productThree} BgColor={ProductColors.ProductClrBlue}/> 
        </div>
    )  
} 
const Products = ({productInfo,BgColor}) => {
    return (
          <div className="product col-1-of-3 text-center margin-guttar-2">   
            <div className={`product-header ${BgColor}`}>  
              <div className="img-box product-img">
                <img src={productImg} alt='wanda bag 40 kg'className='img-width-100'/> 
              </div>
              <h1 className="product-name heading secondary clr-dark-grey">{productInfo.name}</h1>
            </div>
            <div className="product-nutrition margin-bottom-sm">
            <h3 className='product-benefit-heading'>Nutrition</h3>
              <h4 className='product-text-info'>{productInfo.fat}</h4>
              <h4 className='product-text-info'>{productInfo.calcium}</h4>
              <h4 className='product-text-info'>{productInfo.moisture}</h4>
              <h4 className='product-text-info'>{productInfo.life}</h4>
            </div>
            <div className="product-benefits margin-bottom-sm">
                <h3 className='product-benefit-heading'>Benefits</h3>
              <h4 className='product-text-info'>{productInfo.benefit1}</h4> 
              <h4 className='product-text-info'>{productInfo.benefit2}</h4>
              <h4 className='product-text-info'>{productInfo.benefit3}</h4> 
            </div>
            <div className="product-contact margin-bottom-sm"> 
            <h3 className='product-benefit-heading'>Contact</h3>
              <h4 className='product-text-info'>{productInfo.contactNo}</h4> 
            </div>
          </div> 
          )
} 

export default ProductCont;  