document.addEventListener('DOMContentLoaded', () => {
    const books = [
      {
        title: "JavaScript: The Good Parts",
        author: "Douglas Crockford",
        genre: "Programming",
        image: "https://yandex-images.clstorage.net/Zpqa53130/669620mLMESI/ZEbKe7GzJJlZ2V5zg8x0WbxYlg__3mZbFswWUp_qhuyBH3FZdcbB6ONMQ_FWknYwEB96j_Px7LnCT2u9KkBwiEByDg-gxtHNOEwe87OcVYxoaYfKX5u3_zMMp3dvOja88syzLvLQsyuhyyRWkoJGlSVb-2qGFLpPRh5dnW7DZtlXtOkJhlGmuO2JbTOArgf9LarXOK7atdmBnxXR_46zKrBvwhySgWCa0Rk3RSBD9jZEmizJFIT7X7Kd7z0ekIX4lZQJ-cdBtli92J0AMz017ww4BZlM2jTac4wHIa2ew7jBfyGO0BOwulA7FvXzQNY0R-pPaOW3-v5ybw59baBEurfWm-jFIXZrTbmPUlNtVR-um8ebv2sG29IexpKNHtK6Qk0jvrPDIZnTewfWg-KGNUSKX2jkZevM8Lzfrn9AZfsHh0mq53NVWh57rlIxHGUNz9v1Oy9pB6nAv9RCDe7RiTHNMh_BoaDakNmmlPOCxfblqg7b9JQLDbG8b5x9o2c658bJKCXB1KsOWCyREUyHfDxppFveK4e6IX_kEZ0NEbtznzN8sXHQeSB7xmUQUIbkZ0v_OYQUGj4TPe-8HlFGqkV0CCqn0td4nmiP4cKsdz3OefW5nBm06aFNByFdHUMK473D_6BwAMkCewaEk8L2hkZrLvkWVJuf4nzNDRyABVt1dXo6ZaMniD_bvJMR3acebHm36ew691kz_AVwnuyhakOuwQ4zwgMqQckGtJCTNRXF6C7L9vb6jdJeDV2NUPcLRSQbeDZzZaosmd7SM-0VrFzb9Rg8CuXrA48186zNYQtT3sJtcYPgmbB5t1ZDkkbUBXsPCif0CvziLE9Nv2HF-2aXqhnXoGboXfuesCAe5J1MShYILlqkiZPeFeLNz_LYgE5DX-PycqowW-aVQwAnBzYYTLokNosOAMxtXByTFIrWBHuLpjO0eU-47LHh7PRMPImGe3-pFOhiHNbh4",
      },
      {
        title: "Eloquent JavaScript: A Modern Introduction to Programming",
        author: "Marijn Haverbeke",
        genre: "Programming",
        image: "https://avatars.mds.yandex.net/i?id=ba90bbd9873a496e270094945c0aa8f3-5249239-images-thumbs&n=13",
      },
      {
        title: "Learning JavaScript Design Patterns",
        author: "Addy Osmani",
        genre: "Programming",
        image: "https://avatars.mds.yandex.net/i?id=942139ac758fcf9226a134bf15bba51692c074d5-7758299-images-thumbs&n=13",
      },
      {
        title: "You Don't Know JS: this & Object Prototypes",
        author: "Kyle Simpson",
        genre: "Programming",
        image: "https://avatars.mds.yandex.net/i?id=c9db137715f5173727d4f72d12442e96cbb79fda-5298475-images-thumbs&n=13",
      },
      {
        title: "JavaScript Patterns",
        author: "Stoyan Stefanov",
        genre: "Programming",
        image: "https://avatars.mds.yandex.net/i?id=1499e0c1e50780f1bc2303875203c0205b6d11a5-5101230-images-thumbs&n=13",
      },
        {
            title: 'The Great Gatsby',
            author: 'F. Scott Fitzgerald',
            image: 'https://avatars.mds.yandex.net/i?id=0321d5083e296a1039e1e55e93ce42995c66c00c-12400592-images-thumbs&n=13',
        },
        {
            title: 'To Kill a Mockingbird',
            author: 'Harper Lee',
            image: 'https://i.pinimg.com/236x/89/79/a8/8979a8e97c70b4e8e1099ea0b47cbff2--harper-lee-to-kill-a-mockingbird.jpg',
        },
        {
            title: '1984',
            author: 'George Orwell',
            image: 'https://avatars.mds.yandex.net/i?id=d3db2e94c07d56a4d56569f7165c3772046ff080-9072244-images-thumbs&n=13',
        },




     
            {
              title: "Meditations",
              author: "Marcus Aurelius",
             image: "https://avatars.mds.yandex.net/i?id=0564a09a3fb60379268335914caa855c3d364634-10122687-images-thumbs&n=13",
            },
            {
              title: "Sophie's World",
              author: "Jostein Gaarder",
              image: "https://avatars.mds.yandex.net/i?id=9658d8bab89fbd3e99f90e6f9aaa609cd6ce9123-7011710-images-thumbs&n=13",
            },
            {
              title: "Critique of Pure Reason",
              author: "Immanuel Kant",
             image: "https://avatars.mds.yandex.net/i?id=ab996c5d8ce1e5341f6c6a79b0a3f7f304d6b856-9222747-images-thumbs&n=13",
            },
            {
              title: "Thus Spoke Zarathustra",
              author: "Friedrich Nietzsche",
             image: "https://avatars.mds.yandex.net/i?id=a98c021dc95706ee7e740a41dc498b5f-5491388-images-thumbs&n=13",
            },
            {
              title: "The Republic",
              author: "Plato",
              image: "https://avatars.mds.yandex.net/i?id=a2618b03cfbcbcfb84784043cce04024e8fea282-8210080-images-thumbs&n=13",
            }
          
          
         










    ];
     

    const bookList = document.getElementById('book-list');

    books.forEach(book => {
        const bookDiv = document.createElement('div');
        bookDiv.className = 'book';

        bookDiv.innerHTML = `
            <img src="${book.image}" alt="${book.title}">
            <h3>${book.title}</h3>
            <p>by ${book.author}</p>
            <button onclick="addToCart('${book.title}')">Add to Cart</button>
        `;

        bookList.appendChild(bookDiv);
    });
});

function addToCart(bookTitle) {
    alert(`${bookTitle} has been added to your cart.`);
}

// Accessing information about the first philosophy book
console.log("Title:", philosophyBooks[0].title);
console.log("Author:", philosophyBooks[0].author);
console.log("Description:", philosophyBooks[0].description);
