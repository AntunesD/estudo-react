import PubSub from 'pubsub-js';

export default class FormErrors {
    
    publishErrors(object) {
        if (!object.errors) {
            alert(object.message);
            return;
        }

        for(var i=0;i<object.errors.length;i++){
            var erro = object.errors[i];
            PubSub.publish("form-error", erro);
        }
    }
}