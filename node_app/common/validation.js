
// paramSchema bodySchema querySchema
export const validateData = ({ schemaBody, schemaParams, schemaQuery }) => {
    return (req, res, next) => {
        console.log(req.body);
        let errorBody, errorParams, errorQuery;
        if (schemaBody) errorBody = schemaBody.validate(req.body);
        if (schemaParams) errorParams = schemaParams.validate(req.params);
        if (schemaQuery) errorQuery = schemaQuery.validate(req.query);
        
        if(errorBody?.error) throw new Error(errorBody.error.details[0].message);
        if(errorParams?.error) throw new Error(errorParams.error.details[0].message);
        if(errorQuery?.error) throw new Error(errorQuery.error.details[0].message);
        next();
    }
}
