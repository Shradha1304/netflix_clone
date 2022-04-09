import React from 'react';
import {Footer} from '../components';

export function FooterContainer(){
    return(
        <Footer>
            <Footer.Title>Question? Contact US</Footer.Title>
            <Footer.Break/>
            <Footer.Row>
                <Footer.Columnn>
                    <Footer.Link href="#">FAQ</Footer.Link>
                    <Footer.Link href="#">Investor Relation</Footer.Link>
                    <Footer.Link href="#">Ways to Watch</Footer.Link>
                    <Footer.Link href="#">Coporate Relation</Footer.Link>
                    <Footer.Link href="#">Netflix Originals</Footer.Link>
                </Footer.Columnn>

                <Footer.Columnn>
                    <Footer.Link href="#">Help Center</Footer.Link>
                    <Footer.Link href="#">Jobs</Footer.Link>
                    <Footer.Link href="#">Terms of Use</Footer.Link>
                    <Footer.Link href="#">Contact Us</Footer.Link>
                </Footer.Columnn>

                <Footer.Columnn>
                    <Footer.Link href="#">Account</Footer.Link>
                    <Footer.Link href="#">Reedem Gift Cards</Footer.Link>
                    <Footer.Link href="#">Privacy</Footer.Link>
                    <Footer.Link href="#">Spped Test</Footer.Link>
                </Footer.Columnn>
                
                <Footer.Columnn>
                    <Footer.Link href="#">Media Center</Footer.Link>
                    <Footer.Link href="#">Buy Gift Cards</Footer.Link>
                    <Footer.Link href="#">Cookies Performance</Footer.Link>
                    <Footer.Link href="#">Legal Notices</Footer.Link>
                </Footer.Columnn>
                 



            </Footer.Row>
        </Footer>
    )
}