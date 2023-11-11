import React from "react";
import "./styles.css";
/*
Мы указали параметр для функционального компонета, чтобы 
была возможность получить значение атрибутов.
Обычно этот параметр называют props
хотя имя может быть любое.
Параметр заполняется автоматически
Для доступа к значению атрибута используется форма
props.имя_атрибута 
*/
function Quote(props) {
    return (
        <>
            <h2>{props.name}</h2>
            <h2>{props.author}</h2>
            <h2>{props.genre}</h2>
            <h2>{props.pages}</h2>
            <h2>{props.review}</h2>
            <h2>{props.review_s}</h2>
        </>
    );
}

export default function App() {

    let qName = "'Harry Potter'";
    
    let qAuthor = "Author: Joanne Rowling";

    let qGenre = "Ganre: Fantasy";

    let qPages = " Pages: 3636";

    let qReview_f = "Reviwe 1: \
    My favourite film is the story of Harry Potter.I've seen all seven parts of it. The main characters of the film are Harry Potter, his friend Ron and their friend Hermione. They went to Hogwarts School of Witchcraft and Wizardry. During all parts of the story they along with Dumbledore struggle against Voldemort's evil.I found the film exciting, and the acting was wonderful.I think that this film is worth watching.";

    let qReview_s = "Reviwe 2: \
When I first began reading the Philosopher's stone I was immediately struck by how good - and laugh-out-loud funny - the humour was. Rowling has managed to infuse this book with a lovely wit and charm that will both amuse and delight adults and children.\
There are characters in this book that will remind us of all the people we have met.Everybody knows or knew a spoilt, overweight boy like Dudley or a bossy and interfering(yet kind - hearted) girl like Hermione.A large number of the younger readers will also be able to easily identify with Harry.One can easily understand his initial feelings of isolation and not belonging, and then - his excitement at finally leaving that life behind in favour of one where he belongs and will be happy.\
Hogwarts is a truly magical place, not only in the most obvious way but also in all the detail that the author has gone to describe it so vibrantly.And there many adventures befall the trio(Harry, Ron and Hermione) and the stone in the book's title is centre to all that happens. The story comes to an exciting conclusion that has the ultimate feel-good factor.\
    J.K.Rowling should be commended for getting so many people reading and excited by books.This book is highly recommended to anybody between the ages of 8 and 80.";
    return (
       <div className="App">
            <h3><Quote name={qName} /></h3>

            <div className="Image">
                <img src="https://sneg.top/uploads/posts/2023-04/1681747284_sneg-top-p-kartinki-knigi-garri-potter-vkontakte-36.png"></img>
            </div>

            <div className="All">
                <div className="info">
                 <Quote author={qAuthor} genre={qGenre} pages={qPages} genre={qGenre}  />
                </div>

                <div className="Reviwe">
                    <Quote review={qReview_f} review_s={qReview_s } />
                </div>
            </div>
            
        </div>
        
    );
}
