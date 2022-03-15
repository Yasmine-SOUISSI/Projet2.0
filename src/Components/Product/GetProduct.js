import React from "react";

export default function GetProduct({ product }) {
    return (
        <div class="main-container">
            <div class="cards">
                <div class="card card-1">
                    <p class="card__text">{product.title}</p>

                    <img src={product.imageURL} />
                    <h3 class="card__title">{product.description}</h3>
                </div>
            </div>
        </div>
    );
}
