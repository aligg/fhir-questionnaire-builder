import { Fhir } from "fhir";

const fhir = new Fhir();

/**
 * Helper to validate received FHIR object
 * @param {obj} obj FHIR object
 * @returns {obj} e.g. { valid: true, messages: [] }
 */
export const validate = (obj) => {
    return fhir.validate(obj, { errorOnUnexpected: true });
};
