import { Events } from './events.js';

var body = document.getElementsByTagName('body')[0];

var div = document.createElement('div');
div.classList.add('legado');
div.style.border = '1px solid #000';
div.style.padding = '30px';

var h3 = document.createElement('h3');
h3.innerHTML = 'Isso está no código legado';

const events = Events.getInstance();

// Evento que será disparado no react
events.on("react.chamou", (data) => {
	var p = document.createElement('p');
	p.classList.add('mensagem-react');
	p.innerHTML = `Recebi um evento do react: ${data.message}`;
	document.querySelector('.mensagem-react')?.remove();
	div.append(p)
});

// Evento que será disparado no legado
var button = document.createElement('button');
button.innerHTML = 'Send event to react';
button.addEventListener('click', () => {
	events.emit('legado.chamou', {
		message: 'Hello react'
	});
});

// Evento que será disparado no legado
var button2 = document.createElement('button');
button2.innerHTML = 'Incrementar counter no react';
button2.addEventListener('click', () => {
	events.emit('legado.increment.counter');
});

div.append(h3, button, button2);

body.prepend(div);
