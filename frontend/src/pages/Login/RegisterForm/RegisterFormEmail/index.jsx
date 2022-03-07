import React from 'react';
import { AutoComplete } from 'antd';

export default function RegisterFormEmail({ setEmail, identity }) {

    const [focus, setFocus] = React.useState(false)

    return (
        <div style={{ width: '70%', paddingLeft: '10%', paddingRight: '10%', paddingTop: '50px' }}>
            {identity === 'individual' ? <div style={{ color: 'gray' }}>Enter your NYU email (NetID)</div> : <div></div>}
            <div className={focus ? 'login-input-focus' : 'login-input'}>
                <div style={{ display: 'flex' }}>
                    <AutoComplete
                        bordered={false}
                        allowClear
                        onBlur={() => setFocus(false)}
                        onFocus={() => setFocus(true)}
                        onChange={(value) => setEmail(value + '@nyu.edu')}
                        style={{ padding: '0px', width: '100%', textAlign: 'center' }}
                    >
                    </AutoComplete>
                    <div style={{marginTop:'5px'}}>@nyu.edu</div>
                </div>
            </div>
        </div>
    )
}
