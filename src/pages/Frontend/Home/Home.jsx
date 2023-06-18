import React, { useRef, useEffect, useState } from 'react'
import { Col, Row, Typography } from 'antd'
import WebViewer from '@pdftron/webviewer';

const { Title } = Typography

export default function Apryse() {

    const viewer = useRef(null);
    const [state, setState] = useState({ firstName: "", email: "" })

    useEffect(() => {
        WebViewer(
            {
                path: '/lib',
                licenseKey: 'demo:1684477490584:7da56d8f03000000005942e0782db834670ae612b1c3db07f5a4f9fae0',
                initialDoc: 'https://pdftron.s3.amazonaws.com/downloads/pl/demo-annotated.pdf',
            },
            viewer.current,
        ).then((instance) => {
            const { annotationManager } = instance.Core;
            // you can now call WebViewer APIs here...

            annotationManager.addEventListener('fieldChanged', (field, value) => {
                console.log('field', field)
                console.log(`Field changed: ${field.name}, ${value}`);
                setState(s => ({ ...s, [field.name]: value }))
            });
        });
    }, []);

    return (
        <>
            <Row gutter={[16]}>
                <Col xs={12}>
                    <Title level={3} className='text-blue fw-500'>Apryse</Title>
                </Col>
                <Col xs={12}>
                    <Title level={3} className='text-blue fw-500'>Name: {state.firstName} - Email: {state.email}</Title>
                </Col>
            </Row>
                    <div className="webviewer" ref={viewer} style={{minHeight:"90vh"}} ></div>
            {/* <Row className='mt-0'>
                <Col span={24}>
                </Col>
            </Row> */}
        </>
    )
}
