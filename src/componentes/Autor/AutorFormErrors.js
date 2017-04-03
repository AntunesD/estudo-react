import PubSub from 'pubsub-js';

export default class AutorFormErrors {
    
    publishErrors(object) {
        for(var i=0;i<object.errors.length;i++){
            var erro = object.errors[i];
            PubSub.publish("autor-form-error", erro);
        }
    }
}