import React from 'react';
// import "./Components/index.css"
// import Nav from './Components/Nav';
// import Body from './Components/Body';

// export default function Main(){
//     return(
//         <div>
//             <Nav/>
//             <Body/>
//         </div>
//     )
// }
import Head1 from './Components1/Head1';
import "./Components1/index1.css"
import Details from './Components1/Details';
import Footer from './Components1/Footer';
export default function Main()
{
    return(
        <div id ="main">
            <Head1/>
            <Details/>
            <Footer/>
        </div>
    )
}