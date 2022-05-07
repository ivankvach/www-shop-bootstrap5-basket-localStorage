import {useState} from "react";
import {Form, FormGroup, Label, Input, Button} from "reactstrap";
import Child from "./Child";

export default function Parent() {

    const[name, setName] = useState('')

    const handleNameChange = (event) => {
        setName(event.target.value)
    }
    
    const clickName = () => {
        setName("red")
    }
    return(
        <div>
            <h1>Parent</h1>
            <Form>
                <FormGroup>
                    <Label>Name</Label>
                    <Input type="text" placeholder="Enter name" onChange={handleNameChange} />
                    <Button onClick={clickName} >Hello</Button>
                </FormGroup>
            </Form>
            <Child name={name}/>
        </div>
    )
}