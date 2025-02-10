import React from 'react';
import ButtonSample3 from '../Components/Buttons/ButtonFormTailwind';
import EncryptBtn from '../Components/EncryptBtn';
import { HamburgerBtn } from '../Components/HamburgerBtn';
import HoverBtn from '../Components/HoverBtn';

const ButtonsPage = () => {
    return (
        <div className='flex flex-col gap-10 m-10'>
            <ButtonSample3/>
            <EncryptBtn/>
            <HamburgerBtn/>
            <HoverBtn/>
        </div>
    );
};

export default ButtonsPage;