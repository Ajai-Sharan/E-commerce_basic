import { create } from "zustand";

export const useProductStore = create((set) => ({
    products: [],
    setProducts: (products) => set({ products }),
    createProduct: async (newProduct) => {
        if (!newProduct.name || !newProduct.price || !newProduct.image) {
            return {
                success: false,
                message: "Please fill all the fields."
            }
        }

        try {
            const res = await fetch("http://localhost:5000/api/product", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newProduct)
            })

            if (!res.ok) {
                return {
                    success: false,
                    message: "Server Down"
                }
            }

            const data = await res.json();
            set((state) => ({ products: [...state.products, data.data] }))

            return {
                success: true,
                message: "Product created successfully"
            }
        } catch (error) {
            console.error("Error creating product:", error);
            return {
                success: false,
                message: "Server Down"
            }
        }
    },
    fetchProducts: async () => {
        try {
            const res = await fetch('http://localhost:5000/api/product');
            const text = await res.text();
            console.log(text); // Log the response text
            if (!res.ok) {
                throw new Error('Failed to fetch products');
            }
            const data = JSON.parse(text);
            set({ products: data });
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    },

    deleteProduct : async (pid) => {
        const res = await fetch (`/api/product/${pid}`,{
            method : "DELETE",
        });
        const data = await res.json();
        if(!data.success){
            return {success : false, message : data.message}
        }

        set((state) => ({products: state.products.filter(products => products._id !== pid)}));
        return {success : true, message : data.message}
    },
    updateProduct: async (pid, updatedProduct) => {
        try {
            const res = await fetch(`http://localhost:5000/api/product/${pid}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(updatedProduct)
            })

            if (!res.ok) {
                return {
                    success: false,
                    message: "Server Down"
                }
            }

            const data = await res.json();
            set((state) => ({
                products: state.products.map((product) =>
                    product._id === pid ? data.data : product
                )
            }))

            return {
                success: true,
                message: "Product updated successfully"
            }
        } catch (error) {
            console.error("Error updating product:", error);
            return {
                success: false,
                message: "Server Down"
            }
        }
    }
}))