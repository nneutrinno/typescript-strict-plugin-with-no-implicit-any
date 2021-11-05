export const FILE_CONTENT_WITH_STRICT = `
//@ts-strict
const text: string = null;
`;

export const NULL_ERROR_MESSAGE = "Type 'null' is not assignable to type 'string'.";

export const FILE_CONTENT_WITHOUT_STRICT = `
const text2: string = null;
`;