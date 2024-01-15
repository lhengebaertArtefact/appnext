'use server'

import { redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache'
import { permanentRedirect } from 'next/navigation'
import { revalidateTag } from 'next/cache'
 
export async function create() {
  // ...
}


export async function createProduct(newProductData : any) {
    try {
        const response = await fetch('http://localhost:8000/products', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newProductData),
        });

        if (response.ok) {
            // Si la requête a réussi, mettre à jour la liste des produits en cache
            revalidatePath('/products');
            // On peut également rediriger l'utilisateur vers la nouvelle page du produit
            // Cependant, on devra d'abord extraire l'ID du nouveau produit à partir de la réponse
            const newProduct = await response.json();
            redirect(`/products/${newProduct}`);
        } else {
            throw new Error('Failed to create a new product');
        }
    } catch (error) {
        throw new Error('Failed to fetch data');
    }
}

  export async function updateProduct(productId: string) {
    try {
      // Call database
    } catch (error) {
      // Handle errors
    }
   
    revalidateTag('products') // Update all references to the username
    permanentRedirect(`/products/${productId}`) // Navigate to the new user profile
  }
  