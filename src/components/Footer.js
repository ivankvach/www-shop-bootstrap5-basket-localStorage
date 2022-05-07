import { useState, useEffect } from "react";
import { Navbar } from "reactstrap";

function Footer({name}) {
    let localData1 = [];
for (var i = 0; i < localStorage.length; i++) {
    localData1.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
  }
    const [click, setName] = useState(0)
    const [delette, setDelete] = useState();
    const [localDataNew, setLocalDataNew] = useState([]);
        useEffect(() => {
            setLocalDataNew(localData1);
  }, [click, delette]);
  useEffect(() => {
    setName(name);
});


const deleteMe = (item) => {
    console.log(item.title)
    localStorage.removeItem(item.title)
    setDelete(item.title)
}
  //console.log(name)
    return ( 
        localDataNew.map((item) =>
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <img src={item.images1}/>
                        <div className="card-body">
                            <h5 className="card-title">{item.title}</h5>
                            <h5 className="card-title">{click}</h5>
                            <p className="card-text">{item.description}</p>
                            {/* <button onClick={() => setClick((click) => click + 1)}>go</button> */}
                            <button type="button" onClick={() => deleteMe(item)}class="btn btn-primary" data-bs-toggle="button" autocomplete="off">get</button>
                        </div>
                    </div>
                </div>
            </div>
        <Navbar>Nav</Navbar>
        </div>
        )
    )
}

export default Footer;