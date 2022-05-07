import { useState} from 'react';
import Footer from './Footer';
import tires from "../images/tires.jpg";

export function Data() {
  const wheel = [
        {
        title: "Michelin",
        images: `${tires}`,
        description: "Super stylish wheels"
        },
        {
        title: "Toyo",
        images: `${tires}`,
        description: "Super stylish wheels"
        },
        {
        title: "Hankook",
        images: `${tires}`,
        description: "Super stylish wheels"
        },
        {
            title: "Pirelli",
            images: `${tires}`,
            description: "Super stylish wheels"
        },
        {
            title: "Cleber",
            images: `${tires}`,
            description: "Super stylish wheels"
        },
        {
            title: "Lassa",
            images: `${tires}`,
            description: "Super stylish wheels"
        },
        {
            title: "Nokian",
            images: `${tires}`,
            description: "Super stylish wheels"
        },
        {
            title: "Premiori",
            images: `${tires}`,
            description: "Super stylish wheels"
        },
        {
            title: "Hardsoft",
            images: `${tires}`,
            description: "Super stylish wheels"
        }
    ]
    const [name, setName] = useState(2);
    const [click, setClick] = useState(0);
    const changeMe = (item)=> {
        alert("Hi");
        localStorage.setItem(item.title, JSON.stringify(item));
        console.log(item.title)
        setName(item);
        setClick(click+1)
        let localData1 = [];
        for (var i = 0; i < localStorage.length; i++) {
            localData1.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
          }
        console.log("gi")
    }

    console.log(name)
    
    const getMe = ()=> {
        alert("get this...");
        alert(localStorage.getItem("lastname"));
    }

    return(
        <>
        {wheel.map((item) =>
        <div className="col-3">
                <div className="card">
                        <img src={item.images} alt="immage"/>
                        <div className="card-body">
                            <h5 className="card-title">{item.title}</h5>
                            <p className="card-text">{item.description}</p>
                            <button type="button" onClick={() => changeMe(item)}class="btn btn-primary" data-bs-toggle="button" autocomplete="off">buy</button>
                            <button type="button" onClick={() => getMe()}class="btn btn-primary" data-bs-toggle="button" autocomplete="off">get</button>
                        </div>
                </div> 
        </div>
   )
        }
        <Footer name={click}/>
        </>
        )

 }
