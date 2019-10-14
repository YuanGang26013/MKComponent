import * as React from 'react';
import { hot } from 'react-hot-loader/root';
import MKCheckBox from '../src/pc/mk.checkbox';

const ExampleContainer = () => {
    return (
        <div style={{display:'flex', flexWrap: 'wrap'}}>
            {
                '1,'.repeat(1).split(',').map((item,index)=><MKCheckBox id={`checkbox-${index}`} text={`checkbox-${index}`}/>)
            }

        </div>
    )
};

export default hot(ExampleContainer);