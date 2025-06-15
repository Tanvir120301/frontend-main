import p1_img from '../assets/Kurti.webp'
import p2_img from '../assets/Jeans.avif'
import p3_img from '../assets/women2.jpg'
import p4_img from '../assets/men1.webp'

let data_product= [
     {
            id: 1,
            name: "Kurti",
            category: "women",
            image: p1_img,
            new_price: 350.0,
            old_price: 480.0
        },
    
        { id: 2, name: "Jeans", category: "men", image:p2_img, new_price: 999.0, old_price: 1299.0 },
        { id: 3, name: "Saree", category: "women", image:p3_img, new_price: 799.0, old_price: 999.0 },
        { id: 4, name: "Shirt", category: "men", image: p4_img, new_price: 499.0, old_price: 699.0 }
]

export default data_product;