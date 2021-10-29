import React, { useEffect, useState } from "react";
import { Events } from '../events';

const useEventListener = (event, callback) => {
	const events = Events.getInstance();

	useEffect(() => {
		if (typeof callback === 'function') {
			events.on(event, callback);
			return () => {
				events.off(event, callback);
			};
		}
	}, [event, callback]);

	return {
		emit: data => events.emit(event, data),
	}
}

export const MeuComponenteReact = props => {
	const [count, setCount] = useState(0);
	const [legadoMessage, setLegadoMessage] = useState('');
	useEventListener('legado.chamou', data => setLegadoMessage(data.message));
	useEventListener('legado.increment.counter', () => setCount(prev => prev + 1));
	const triggerFromReact = useEventListener('react.chamou');

	return (
		<div style={{ marginTop: "20px", border: "1px solid", padding: "30px" }}>
			<h3>Isso está no React</h3>
			<button onClick={() => {
				triggerFromReact.emit({
					message: 'Hello legado'
				});
			}}>Send event to legado</button>
			<button onClick={() => setCount(prev => prev + 1)}>Teste useState counter: {count}</button>
			{legadoMessage && <p>Recebi um evento do legado: {legadoMessage}</p>}
		</div >
	);
};