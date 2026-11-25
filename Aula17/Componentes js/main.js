import {TextBoxComponet} from "./componentes/caixaDetexto.js";

document.body.innerHTML = 
${new TextBoxComponent({
    className: "control-3d",
    placeholder: "Digite seu nome",
    type: "text",
    label: "Nome:",

}).render()};


${new TextBoxComponet({
    className: "control-3d",
    placeholder: "Digite sua senha",
    type: "password",
    label: "Senha",
}).render()};