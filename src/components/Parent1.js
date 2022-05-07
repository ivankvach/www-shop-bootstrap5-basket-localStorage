import {useState} from "react";
import {Form, FormGroup, Label} from "reactstrap";
import Child1 from "./Child1";

export default function Parent1() {

    const[name, setName] = useState('')
    const handleNameChange = (name) => {
        setName(name)
    }

    return(
        <div>
            <h1>Parent1</h1>
            <Form>
                <FormGroup>
                    <Label> {name}</Label>
                </FormGroup>
            </Form>
            <Child1 onChange={handleNameChange}/>
        </div>
    )
}