import React from 'react';
import './tooling.css'

const Tooling = () => {
    return (
        <div className="tooling">
            <div className="tooling-content">
                <div className="tooling-content-block">
                    <h4 className="tooling-content-title">Free, open, simple</h4>
                    <p className="tooling-content-text">Blogr is a free and open source application backed by a large community of helpful 
                                                        developers. It supports features such as code syntax highlighting, RSS feeds, social 
                                                        media integration, third-party commenting tools, and works seamlessly 
                                                        with Google Analytics. The architecture is clean and is relatively easy to learn.
                    </p>
                </div>
                <div className="tooling-content-block">
                    <h4 className="tooling-content-title">Powerful tooling</h4>
                    <p className="tooling-content-text">Batteries included. We built a simple and straightforward CLI tool that makes
                                                        customization and deployment a breeze, but capable of producing even the most complicated sites.
                    </p>
                </div>
            </div>
        </div>
    );
}
 
export default Tooling;