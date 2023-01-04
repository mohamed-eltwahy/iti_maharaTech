const Ajv = require('ajv').default;


const schema = {
    "type": "object",
    "properties": {
        "name": {
            "type": "string",
            "pattern": "^[A-Z][a-z]*$"


        },
        "title": { "type": "string", "maxLength": 10, "minLength": 5 }
    }
};

const ajv=new Ajv();
module.exports=ajv.compile(schema);