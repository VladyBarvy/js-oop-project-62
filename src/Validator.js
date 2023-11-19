/* eslint-disable class-methods-use-this */
import * as yup from 'yup';
import StringSchema from './StringSchema.js';

class Validator {
    constructor() {
      this.schema = null;
      this.customValidators = {
        string: [],
        number: [],
        array: [],
      };
    }
  
    getSchema() {
      return this.schema;
    }
  
    setSchema(schema) {
      this.schema = schema;
    }
  
    string() {
      this.setSchema(new StringSchema(this.customValidators.string));
  
      return this.getSchema();
    }
}

export default Validator;
