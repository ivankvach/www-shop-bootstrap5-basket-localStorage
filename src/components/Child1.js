import {Form, FormGroup, Label, Input} from "reactstrap";

export default function Child1({onChange}) {
    const handleNameChange = (event) => {
        onChange(event.target.value)
    }

    return(
        <div>
            <h1>Child1</h1>
            <Form>
                <FormGroup>
                    <Label>Name</Label>
                    <Input type="text" placeholder="Enter name" onChange={handleNameChange} />
                </FormGroup>
            </Form>
        </div>
    )
}