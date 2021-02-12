INSERT INTO bookshelf (title, author, year, genre, summary, pages, isbn) 

    title VARCHAR(30) NOT NULL,
    author VARCHAR(30) NOT NOT,
    year INTEGER NOT NULL,
    genre VARCHAR(30),
    summary VARCHAR(300),
    pages INTEGER NOT NULL,
    isbn INTEGER NOT NULL,
    id PRIMARY KEY AUTO_INCREMENT
    
    ("The Great Gatsby", "F.Scott Fitzgerald", 1920, "fiction")