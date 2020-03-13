const sanitizeHtml = require('sanitize-html')

export class JsonHandler {

    static clearInput = (formData:object) => {
        const clearInput:object = {}

        for(const [key,value] of (<any>Object).entries(formData)){
            if (typeof value === 'string') value.trim()
            sanitizeHtml(value)
            clearInput[key] = value
        }

        return clearInput
    }

    static JsonResponse = (success:boolean, message:string, statusCode:number = 200) => {
        return({
            "status": statusCode,
            "success": success,
            "message": message,
        })
    }
}