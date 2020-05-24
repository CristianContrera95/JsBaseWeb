import React from 'react';
import { Input, Label, FormText, FormGroup, InputGroup} from 'reactstrap'
import {MDBIcon} from 'mdbreact';

const InputField = ({name, label, type, id, ft, i, change, ph}) => {
    let formtext = '';
    if(ft) {
        formtext = (
            <FormText color="muted" style={{align: "left"}}>{ft}</FormText>
        );
    }
    let icon = '';
    if (i) {
        var icon_type;
        if (type === 'email') {
            icon_type = 'user';
        } else if (type === 'number') {
            icon_type = "phone";
        }  else if (type === 'name') {
                icon_type = "child";
         } else if (type === 'text') {
            icon_type = "T";
        } else if (type === 'password') {
            icon_type = 'unlock';
        } else {
            icon_type = ">";
        }
        icon = (
            <MDBIcon className="mt-2 mr-2" icon={icon_type} ></MDBIcon>
        )
    }
    return (
        <FormGroup>
            <Label for={id || name}>{label}</Label>
            <InputGroup>
                {icon}
                <Input type={type} name={name} id={id || name} placeholder={ph} onChange={change}/>
            </InputGroup>
            {formtext}
        </FormGroup>
    );
}

export default InputField;