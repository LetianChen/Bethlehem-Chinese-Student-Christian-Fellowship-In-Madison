import React from 'react';
import './MediaContentPage.css';
import MediaBox from './MediaBox';

function MediaContentPage(props){
    let {slideUrl, videoUrl, docsUrl} = props
    let content 
    
    return(
        <div className="pageLayout">
            <div className="mediaLayout">
                <div className="mediaWrapper">
                    <MediaBox srcUrl={slideUrl} />
                </div>
                <div className="mediaWrapper">
                    <MediaBox srcUrl={videoUrl} />  
                </div>
            </div>
            <div className="docsWrapper">
                <MediaBox srcUrl={docsUrl} />
            </div>
        </div>
    )
}

export default MediaContentPage;