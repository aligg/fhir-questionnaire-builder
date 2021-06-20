import { Fhir } from "fhir";

const fhir = new Fhir();

/**
 * Helper to validate received FHIR object
 * @param {obj} FHIR obj
 * @returns
 */
export const validate = (obj) => {
    var results = fhir.validate(obj, { errorOnUnexpected: true });
    console.log(results);
};
