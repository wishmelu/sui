import { writable } from 'svelte/store';

/// General configuration
/// whever demo is true, mock data is used for NFTs request and response and for the NFT mirror
/// Mock API response for NFTs mirror will return succeess or error at random
export const config = {
    url: 'http://localhost:8000/',
    demo: false
}
//'0x09dbc4a902199bbe7f7ec29b3714731786f2e878'
export const walletAddress:any = writable(false);