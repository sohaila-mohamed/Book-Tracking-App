import "./App.css";
import { Fragment, useState } from "react";
import { IShelf } from "./models/shelf";
import ShelfsList from "./components/shelf/shelfsList";
import Search from "./components/search/search";


function App() {
  const [showSearchPage, setShowSearchpage] = useState(false);
  const shelfsList:IShelf[]=[
    {
      title:'Currently Reading',
      bookList:[
        {
          title:'To Kill a Mockingbird',
          cover:{
            img:'http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api',
            width:128,
            height:193
          },
          authors:['Harper Lee']
        },
        {
          title:"Ender's Game",
          cover:{
            img:'http://books.google.com/books/content?id=yDtCuFHXbAYC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72RRiTR6U5OUg3IY_LpHTL2NztVWAuZYNFE8dUuC0VlYabeyegLzpAnDPeWxE6RHi0C2ehrR9Gv20LH2dtjpbcUcs8YnH5VCCAH0Y2ICaKOTvrZTCObQbsfp4UbDqQyGISCZfGN&source=gbs_api',
            width: 128,
            height: 188,
          },
          authors:['Orson Scott Card']
        }
      ]
    },
    {
      title:'Want to Read',
      bookList:[
        {
          title:'1776',
          cover:{img:'http://books.google.com/books/content?id=uu1mC6zWNTwC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73pGHfBNSsJG9Y8kRBpmLUft9O4BfItHioHolWNKOdLavw-SLcXADy3CPAfJ0_qMb18RmCa7Ds1cTdpM3dxAGJs8zfCfm8c6ggBIjzKT7XR5FIB53HHOhnsT7a0Cc-PpneWq9zX&source=gbs_api',
          width: 128,
          height: 193},
          authors:['David McCullough']
        },
        {
          title:"Harry Potter and the Sorcerer's Stone",
          cover:{img:'http://books.google.com/books/content?id=wrOQLV6xB-wC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72G3gA5A-Ka8XjOZGDFLAoUeMQBqZ9y-LCspZ2dzJTugcOcJ4C7FP0tDA8s1h9f480ISXuvYhA_ZpdvRArUL-mZyD4WW7CHyEqHYq9D3kGnrZCNiqxSRhry8TiFDCMWP61ujflB&source=gbs_api',
          width: 128,
          height: 192,
        },
          authors:['J.K. Rowling']
        },

      ]
    },
    {
      title:'Read',
      bookList:[
        {
          title:"The Hobbit",
          cover:{img:'http://books.google.com/books/content?id=pD6arNyKyi8C&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE70Rw0CCwNZh0SsYpQTkMbvz23npqWeUoJvVbi_gXla2m2ie_ReMWPl0xoU8Quy9fk0Zhb3szmwe8cTe4k7DAbfQ45FEzr9T7Lk0XhVpEPBvwUAztOBJ6Y0QPZylo4VbB7K5iRSk&source=gbs_api',
          width: 128,
          height: 192},
          authors:['J.R.R. Tolkien']
        },
        {
          title:"Oh, the Places You'll Go!",
          cover:{img:'http://books.google.com/books/content?id=1q_xAwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE712CA0cBYP8VKbEcIVEuFJRdX1k30rjLM29Y-dw_qU1urEZ2cQ42La3Jkw6KmzMmXIoLTr50SWTpw6VOGq1leINsnTdLc_S5a5sn9Hao2t5YT7Ax1RqtQDiPNHIyXP46Rrw3aL8&source=gbs_api',
          width: 128,
          height: 192,
        },
          authors:['Seuss']
        },
      ]
    }
  ]


  return (
    <div className="app">
      {showSearchPage ? (
          <Search searchChanege={{setShowSearchpage,showSearchPage}} />
      ) : (
        <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1> 
        </div>
        <Fragment>
        < ShelfsList shelfs={shelfsList} />
        </Fragment>
        <div className="open-search">
            <a onClick={() => setShowSearchpage(!showSearchPage)}>Add a book</a>
          </div>
        </div>
      )}

    </div>
  );
}

export default App;