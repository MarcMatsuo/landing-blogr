import React from 'react';
import './design.css'

const Design = () => {
    return (
        <div className='main-design'>
            <h3 className='main-design-title'>Designed for the future</h3>
            <div className='main-design-all'>
                <div className='main-design-content'>
                    <div className="main-design-content-block">
                        <h4 className='content-block-title'>Introducing an extensible editor</h4>
                        <p className='content-block-text'> Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content. 
                            The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, videos, 
                            and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or change the looks of a blog.</p>
                    </div>
                    <div className="main-design-content-block">
                        <h4 className='content-block-title'>Robust content management</h4>
                        <p className='content-block-text'> Flexible content management enables users to easily move through posts. Increase the usability of your blog by
                            adding customized categories, sections, format, or flow. With this functionality, you're in full control.</p>
                    </div>
                </div>
                <div className="main-design-content-image"></div>
            </div>
        </div>
    );
}
 
export default Design;