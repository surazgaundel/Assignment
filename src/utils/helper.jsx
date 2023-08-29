
export const priceFormat=(price)=>{
    const newPrice=Intl.NumberFormat('en-US',{
        style:'currency', currency: 'INR' }).format(price);
    return newPrice;
}

export const mrpPrice=(price,discount)=>{
    const discountedPrice=(discount/100)*price;
    return (price+discountedPrice).toFixed(2);
}