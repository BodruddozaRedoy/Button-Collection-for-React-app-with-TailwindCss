import React from 'react';

const Card2 = () => {
    return (
        <div>
            <div class="rounded-xl overflow-hidden flex shadow hover:shadow-md max-w-sm bg-white cursor-pointer h-28">
    <div class="w-7/12 pl-3 p-3 text-text1 flex flex-col justify-center">
        <p class="text-base mb-2 font-bold truncate">Utilities for setting the width of an element</p>
        <div class="text-xs text-primary mb-2">
            <a class="flex items-center">
                <img src="https://images.unsplash.com/photo-1477118476589-bff2c5c4cfbb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=200" class="rounded-full h-8 w-8 mr-2 object-cover" />
                <span class="font-bold tracking-wide text-sm text-pink-400">Jane Doe</span>
            </a>
        </div>
        <div class="text-sm text-text2 tracking-wider">Jan 6 | 4 min read</div>
    </div>
    <div class="lg:flex flex w-5/12 p-2">
        <img src="https://source.unsplash.com/1600x900/?nature,water" class="rounded-xl object-cover w-full h-full"/>
    </div>
</div>
        </div>
    );
};

export default Card2;