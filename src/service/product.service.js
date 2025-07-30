
import axios from "axios";

const API_URL = "http://localhost:8080";

class ProductService {

    saveProduct(product){
        return axios.post(`${API_URL}/saveProduct`, product);
    }

    getAllProduct(){
        return axios.get(`${API_URL}/products`);  // ✅ Corrected endpoint
    }

    getProductById(id){
        return axios.get(`${API_URL}/product/${id}`);  // ✅ Fixed path
    }

    deleteProduct(id){
        return axios.delete(`${API_URL}/deleteProduct/${id}`);  // ✅ Fixed DELETE method
    }

    editProduct(product){
        return axios.put(`${API_URL}/editProduct/${product.id}`, product);  // ✅ Fixed PUT method
    }

    

}

export default new ProductService();
