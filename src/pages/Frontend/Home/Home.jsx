import React, { useEffect, useRef } from 'react'
import WebViewer from '@pdftron/webviewer';


export default function Home() {
	const viewer = useRef(null);

	useEffect(() => {
		WebViewer(
			{
				path: 'lib',
				licenseKey: 'demo:1687013927635:7d82999a03000000009017f03a9b78903e5513024c42cb0ca11b316894',
				initialDoc: 'https://pdftron.s3.amazonaws.com/downloads/pl/demo-annotated.pdf',
			},
			viewer.current,
		).then((instance) => {
			const { documentViewer } = instance.Core;
			// you can now call WebViewer APIs here...
		});
	}, []);

	return (
		<div>
			<div className="header">React sample</div>
			<div className="webviewer" ref={viewer} style={{ height: "100vh" }}></div>
		</div>
	);
}
