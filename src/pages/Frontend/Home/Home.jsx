import React, { useEffect, useRef } from 'react'
import WebViewer from '@pdftron/webviewer';


export default function Home() {
	const viewer = useRef(null);

	useEffect(() => {
		WebViewer(
			{
				path: 'lib',
				// licenseKey: 'demo:1687013927635:7d82999a03000000009017f03a9b78903e5513024c42cb0ca11b316894',
				initialDoc: '/src/assets/file/document.pdf',
				fullAPI: true,
			},
			viewer.current,
		).then(instance => {
			const { documentViewer, annotationManager } = instance.Core;

			documentViewer.addEventListener('documentLoaded', () => {
				documentViewer.getAnnotationsLoadedPromise().then(() => {
					// iterate over fields
					const fieldManager = annotationManager.getFieldManager();
					fieldManager.forEachField(field => {
						console.log(field.getValue(), "Value");
						field.setValue('new value');
					});
				});
			});
		});
	}, [])

	return (
		<div>
			<div className="header">React</div>
			<div className="webviewer" ref={viewer} style={{ height: "100vh" }}></div>
		</div>
	);
}
