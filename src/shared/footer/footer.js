import React from 'react'
import "./footer.css"


class Footer extends React.Component {

    render() {
        return (
            <main id="footer">
                <div id="footer-text">
                    <a id="text-element" href="/Contact">
                        Contact
                    </a>
                    <a id="text-element" href="/Creator">
                        Creator
                    </a>
                </div>



            </main>
        );
    }
}

export default Footer;