import React from 'react';
import 'plyr/dist/plyr.css';
export declare enum PLATFORMS {
    YOUTUBE = "YOUTUBE",
    VIMEO = "VIMEO"
}
interface Props {
    platform: string;
    sourceId: string;
    width?: string;
    height?: string;
}
declare const ZotPlayer: React.FC<Props>;
export default ZotPlayer;
